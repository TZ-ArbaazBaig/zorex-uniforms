import React from 'react';
import GalleryClient from './page-client';

export const metadata = {
  title: "Uniform Gallery | Zorex Tailor Chennai — Police, School & More",
  description: "Browse finished police, school, military, corporate and healthcare uniforms stitched by Zorex Tailor, Periamet, Chennai.",
  alternates: {
    canonical: "https://zorexuniforms.netlify.app/gallery",
  },
  openGraph: {
    title: "Uniform Gallery | Zorex Tailor Chennai",
    description: "See finished police, school, and institutional uniforms stitched by Zorex Tailor, Periamet, Chennai.",
    type: "website",
    url: "https://zorexuniforms.netlify.app/gallery",
    locale: "en_IN",
    images: [
      {
        url: "https://zorexuniforms.netlify.app/images/police_uniform.png",
        width: 1200,
        height: 630,
        alt: "Uniform gallery stitched by Zorex Tailor, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniform Gallery | Zorex Tailor Chennai",
    description: "Browse police, school, and institutional uniform work by Zorex Tailor.",
    images: ["https://zorexuniforms.netlify.app/images/police_uniform.png"],
  },
};

export default function Page() {
  return <GalleryClient />;
}
