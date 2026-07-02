import React from 'react';
import ContactClient from './page-client';

export const metadata = {
  title: "Contact Zorex Tailor | Muthu St, Periamet, Chennai 600003",
  description: "Visit or WhatsApp Zorex Tailor at Muthu St, Periamet, Park Town, Chennai 600003. Open Mon–Sat 10AM–8PM, Sunday 11AM–2PM.",
  alternates: {
    canonical: "https://zorexuniforms.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Zorex Tailor | Muthu St, Periamet, Chennai 600003",
    description: "Visit our workshop at Muthu St, Periamet, Chennai, or reach us on WhatsApp for quick institutional and bulk quotes.",
    type: "website",
    url: "https://zorexuniforms.netlify.app/contact",
    locale: "en_IN",
    images: [
      {
        url: "https://zorexuniforms.netlify.app/images/police_uniform.png",
        width: 1200,
        height: 630,
        alt: "Contact Zorex Tailor workshop in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zorex Tailor | Periamet, Chennai",
    description: "Muthu St, Periamet, Park Town, Chennai 600003. +91 63693 30737.",
    images: ["https://zorexuniforms.netlify.app/images/police_uniform.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}
