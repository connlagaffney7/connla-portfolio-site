import { Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "Connla Gaffney Copywriting · Get supplement emails out of spam",
  description:
    "I help supplement and wellness brands whose emails land in spam or Promotions get seen in the inbox, or they don't pay the second half.",
  openGraph: {
    title: "Connla Gaffney Copywriting · Get supplement emails out of spam",
    description:
      "I help supplement and wellness brands whose emails land in spam or Promotions get seen in the inbox, or they don't pay the second half.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${bricolage.variable} ${archivo.variable}`}>
      <head>
        {/*
          Reveal animations render their hidden state into the server HTML, so if
          the client JS never arrives the page would read as blank. This forces
          every animated element visible when scripting is unavailable.
        */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
