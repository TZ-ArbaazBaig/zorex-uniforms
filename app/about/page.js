import React from 'react';
import AboutClient from './page-client';

export const metadata = {
  title: "About Zorex Tailor | Uniform Workshop in Periamet, Chennai Since 1994",
  description: "Zorex Tailor has stitched police, school, and institutional uniforms from Periamet, Chennai since 1994. Learn about our workshop, craftsmanship, and 1000+ satisfied institutional clients.",
  alternates: {
    canonical: "https://zorexuniforms.netlify.app/about",
  },
  openGraph: {
    title: "About Zorex Tailor | Uniform Workshop in Periamet, Chennai Since 1994",
    description: "Since 1994, our Periamet workshop has stood for durability and precision — trusted by Chennai's police, schools, and institutions.",
    type: "website",
    url: "https://zorexuniforms.netlify.app/about",
    locale: "en_IN",
    images: [
      {
        url: "https://zorexuniforms.netlify.app/images/police_uniform.png",
        width: 1200,
        height: 630,
        alt: "About Zorex Tailor workshop heritage, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zorex Tailor | Periamet, Chennai Since 1994",
    description: "Trusted uniform tailoring workshop in Chennai since 1994.",
    images: ["https://zorexuniforms.netlify.app/images/police_uniform.png"],
  },
};

export default function Page() {
  return <AboutClient />;
}
