import { Cinzel, Source_Sans_3, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Zorex Tailor — Chennai's Premium Uniform Tailors",
  description: "Zorex Tailor (Muthu St, Periamet, Park Town, Chennai) specializes in high-quality Police & Paramilitary Uniforms, School & College Uniforms, Military, Corporate, and Healthcare attire. Phone: +91 63693 30737.",
  keywords: "Zorex Tailor, Chennai Tailors, Police Uniform Chennai, School Uniform Tailor Chennai, NCC Uniforms, Alterations Chennai, Periamet Tailor, Paramilitary Uniforms Chennai",
  authors: [{ name: "Zorex Tailor" }],
  openGraph: {
    title: "Zorex Tailor — Chennai's Premium Uniform Tailors",
    description: "Specializing in Police, Paramilitary, and School Uniforms in Chennai since 1994. Expert craftsmanship and perfect fit.",
    url: "https://zorextailor.com",
    type: "website",
    locale: "en_IN",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${sourceSans3.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main style={styles.mainContent}>
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}

const styles = {
  mainContent: {
    flex: '1 0 auto',
    minHeight: 'calc(100vh - 80px)',
  }
};
