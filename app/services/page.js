import React from 'react';
import ServicesClient from './page-client';

export const metadata = {
  title: "Uniform Services & Specifications | Zorex Tailor Chennai",
  description: "Police, School, Military, Corporate, Healthcare & GST uniform tailoring in Chennai. Regulation-approved fabrics, double-reinforced stitching, bulk institutional orders. WhatsApp +91 63693 30737.",
  alternates: {
    canonical: "https://zorexuniforms.netlify.app/services",
  },
  openGraph: {
    title: "Uniform Services & Specifications | Zorex Tailor Chennai",
    description: "Regulation-approved khaki police drill, school & NCC cadet wear, corporate, healthcare & GST uniforms — custom drafted, double-stitched, bulk-ready.",
    type: "website",
    url: "https://zorexuniforms.netlify.app/services",
    locale: "en_IN",
    images: [
      {
        url: "https://zorexuniforms.netlify.app/images/police_uniform.png",
        width: 1200,
        height: 630,
        alt: "Uniform specifications tailored by Zorex Tailor, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniform Services & Specifications | Zorex Tailor Chennai",
    description: "Police, school, military, corporate, healthcare & GST uniform tailoring in Chennai.",
    images: ["https://zorexuniforms.netlify.app/images/police_uniform.png"],
  },
};

export default function Page() {
  return <ServicesClient />;
}
