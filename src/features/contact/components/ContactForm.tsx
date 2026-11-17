/**
 * The contact forms are Sent through EmailJS from the browser — two templates:
 * a notification to the office and an auto-reply to the enquirer.
 *
 * The auto-reply is automatic and the name implies. EmailJs sends it itself.
 *
 * And please note, I set the templates in emailJs to fetch the company logo
 * from my AWS s3 bucket.
 *
 * But now the problem is that in mobile views at least most of the time the
 * logo won't load, but i does for PC view.
 *
 * @author Awa Precious
 */

'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
const TEMPLATE_NOTIFY = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY ?? '';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE = '+237 672 149 730';

/** Env vars are inlined at build time, so a missing one is empty, not undefined. */
const MISSING_CONFIG: string[] = (
  [
    ['NEXT_PUBLIC_EMAILJS_SERVICE_ID', SERVICE_ID],
    ['NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', PUBLIC_KEY],
    ['NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY', TEMPLATE_NOTIFY],
  ] as const
)
  .filter(([, value]) => !value)
  .map(([name]) => name);

interface SendFailure {
  status: number | null;
  text: string;
}

/**
 * EmailJS rejects with `EmailJSResponseStatus` — a plain class carrying
 * `status` and `text`, NOT an `Error`. Passing it straight to console.error
 * prints "[object Object]" and discards the only diagnostic the API returns,
 * which is why this used to fail silently. Unpack it explicitly.
 *
 * Its validate* helpers throw bare strings instead, so handle both.
 */
function describeSendError(error: unknown): SendFailure {
  if (typeof error === 'string') return { status: null, text: error };

  if (error && typeof error === 'object' && ('text' in error || 'status' in error)) {
    const { status, text } = error as { status?: unknown; text?: unknown };
    return {
      status: typeof status === 'number' ? status : null,
      text: typeof text === 'string' && text.trim() ? text : 'EmailJS returned no message body.',
    };
  }

  if (error instanceof Error) return { status: null, text: error.message };
  return { status: null, text: String(error) };
}

/**
 * A misconfigured key or template is not fixed by pressing send again, so
 * don't tell the enquirer to retry — point them at the phone instead.
 */
function messageFor({ status }: SendFailure): string {
  // 412 is EmailJS's "the connected mail account is broken" code (e.g. a
  // revoked Gmail OAuth grant). Like 400/403/404 it is server-side config,
  // so retrying cannot help the enquirer.
  if (status === 400 || status === 403 || status === 404 || status === 412) {
    return `Message not sent — the enquiry form needs attention. Please call ${PHONE}.`;
  }
  if (status === 429) {
    return `Too many attempts just now. Please wait a moment and try again, or call ${PHONE}.`;
  }
  return `Message not sent. Please try again, or call ${PHONE}.`;
}

interface FormValues {
  first_name: string;
  last_name: string;
  work_email: string;
  phone_number: string;
  message: string;
  website: string;
}

function validate(values: FormValues): string[] {
  const errors: string[] = [];

  if (!values.first_name.trim()) errors.push('First name is required');
  if (!values.last_name.trim()) errors.push('Last name is required');

  if (!values.work_email.trim()) errors.push('Work email is required');
  else if (!EMAIL_PATTERN.test(values.work_email.trim())) errors.push('Work email is not valid');

  if (!values.message.trim()) errors.push('Message is required');
  else if (values.message.length > 5000) errors.push('Message is too long');

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const sendingRef = useRef(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;

    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const values: FormValues = {
      first_name: String(raw.first_name ?? ''),
      last_name: String(raw.last_name ?? ''),
      work_email: String(raw.work_email ?? ''),
      phone_number: String(raw.phone_number ?? ''),
      message: String(raw.message ?? ''),
      website: String(raw.website ?? ''),
    };

    // Honeypot — real users never fill a hidden field. Fail silently.
    if (values.website) {
      form.reset();
      return;
    }

    const validationErrors = validate(values);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      toast.warn('Please check the highlighted fields.');
      return;
    }

    if (MISSING_CONFIG.length > 0) {
      console.error(
        `Contact form is not configured — missing env var(s): ${MISSING_CONFIG.join(', ')}. ` +
          'NEXT_PUBLIC_* values are inlined at build time, so these must be set when the app is built, not only at runtime.',
      );
      toast.error(`Message not sent — the enquiry form needs attention. Please call ${PHONE}.`, {
        autoClose: 8000,
      });
      return;
    }

    setErrors([]);
    sendingRef.current = true;
    setIsSending(true);

    const firstName = values.first_name.trim();
    const lastName = values.last_name.trim();

    const params = {
      name: `${firstName} ${lastName}`.trim(),
      firstName,
      lastName,
      email: values.work_email.trim(),
      phone: values.phone_number.trim(),
      message: values.message.trim(),
      time: new Date().toLocaleString('en-GB', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Africa/Douala',
      }),
    };

    const pending = toast.loading('Sending your message...');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_NOTIFY, params, {
        publicKey: PUBLIC_KEY,
      });

      toast.update(pending, {
        render: 'Message Sent.',
        type: 'success',
        isLoading: false,
        autoClose: 6000,
      });

      form.reset();
    } catch (error) {
      const failure = describeSendError(error);
      console.error(
        `Contact form send failed — status: ${failure.status ?? 'n/a'}, response: ${failure.text}`,
        error,
      );
      toast.update(pending, {
        render: messageFor(failure),
        type: 'error',
        isLoading: false,
        autoClose: 8000,
      });
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
  }

  return (
    <div className="contact-form layout-01 ">
      <div className="heading">
        <h2 className="heading-title">Enrol.</h2>
        <div className="heading-desc">
          Leave us your details and we&rsquo;d have you enrolled immediately.
        </div>
      </div>

      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="field-input">
              <label htmlFor="first_name">First name*</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                placeholder="Enter your first name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="field-input">
              <label htmlFor="last_name">Last name*</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="field-input">
              <label htmlFor="work_email">Work email*</label>
              <input
                type="email"
                name="work_email"
                id="work_email"
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="field-input">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="field-input field-textarea">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                required
                placeholder="Write your message"
              />
            </div>
          </div>

          {/* Honeypot — hidden from users, catches naive bots. */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="col-md-12">
            {errors.length > 0 && (
              <div id="content" role="alert">
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="field-submit">
              <input
                type="submit"
                value={isSending ? 'Sending...' : 'Send Message'}
                name="submit"
                disabled={isSending}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
