import React from 'react';
import HomeClient from './page-client';

export const metadata = {
  title: "Zorex Tailor | Police & School Uniform Tailors in Periamet, Chennai",
  description: "Zorex Tailor, Periamet, Chennai — specialists in Police & Paramilitary and School & College uniforms since 1994. Also Military, Corporate, Healthcare & GST uniforms. Call +91 63693 30737.",
  alternates: {
    canonical: "https://zorexuniforms.netlify.app/",
  },
  openGraph: {
    title: "Zorex Tailor | Police & School Uniform Tailors in Periamet, Chennai",
    description: "Specializing in Police, Paramilitary, and School Uniforms in Chennai since 1994. Expert craftsmanship and perfect fit.",
    type: "website",
    url: "https://zorexuniforms.netlify.app/",
    locale: "en_IN",
    images: [
      {
        url: "https://zorexuniforms.netlify.app/images/police_uniform.png",
        width: 1200,
        height: 630,
        alt: "Khaki police uniform tailored by Zorex Tailor, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorex Tailor | Police & School Uniform Tailors in Periamet, Chennai",
    description: "Specializing in Police, Paramilitary, and School Uniforms in Chennai since 1994.",
    images: ["https://zorexuniforms.netlify.app/images/police_uniform.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Zorex Tailor",
  "image": "https://zorexuniforms.netlify.app/images/police_uniform.png",
  "url": "https://zorexuniforms.netlify.app/",
  "telephone": "+91-63693-30737",
  "email": "zorextailor@gmail.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Muthu St, Periamet, Park Town",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0855,
    "longitude": 80.2712
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://wa.me/916369330737"
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Police & Paramilitary Uniform Tailoring" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "School & College Uniform Tailoring" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Military & Defence Uniform Tailoring" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate & Industrial Uniform Tailoring" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare & Medical Uniform Tailoring" } }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
