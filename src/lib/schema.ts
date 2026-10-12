const BASE = 'https://maxwelltraining.cm';

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${BASE}/#organization`,
  name: 'Maxwell Training',
  url: BASE,
  logo: `${BASE}/assets/images/maxwell-training.svg`,
  image: `${BASE}/assets/images/og-default.png`,
  description:
    'Work-based, one-on-one training in cyber security, software engineering and digital marketing in Douala, Cameroon.',
  email: 'contact@maxwelltechnologiesplc.com',
  telephone: '+237672149730',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, Air France Building, Bonanjo',
    addressLocality: 'Douala',
    addressCountry: 'CM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitudes: 4.0414629,
    longitudes: 9.6861914,
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100094109372893',
    'https://www.instagram.com/maxwell.training',
    'https://www.linkedin.com/company/maxwell-training/',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Maxwell Technologies',
    url: 'https://www.maxwelltechnologiesplc.com',
  },
};

export interface CourseSchemaInput {
  name: string;
  description: string;
  slug: string;
  hours?: number;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export function courseSchema(course: CourseSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${BASE}/${course.slug}`,
    provider: { '@id': `${BASE}/#organization` },
    inLanguage: 'en',
    educationLevel: course.level ?? 'Beginner',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['on-site', 'online'],
      courseWorkload: course.hours ? `PT${course.hours}H` : undefined,
      location: {
        '@type': 'Place',
        name: 'Maxwell Training',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2nd Floor, Air France Building, Bonanjo',
          addressLocality: 'Douala',
          addressCountry: 'CM',
        },
      },
    },
  };
}
