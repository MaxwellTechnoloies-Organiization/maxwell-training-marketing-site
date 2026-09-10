/**
 * Toast container is mounted once in the root layout.
 * 
 * The Toaster is a separate client component because layout.tsx is a server component and
 * ToastContainer needs browser APIs.
 *
 * @author Awa Precious
 */

"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toaster() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      draggable
      theme="light"
    />
  );
}
