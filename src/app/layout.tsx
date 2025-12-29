
import { Pacifico, Poppins } from "next/font/google";
import "../styles/scss/main.scss";
import './globals.css';
import { Metadata } from "next";
import Script from "next/script";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", 
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  verification: {
    google: "rxaQ6DAQy1f5kx5UB4XEv7LzC9JFMeaIZyl38-Cqm6Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Google Analytics - gtag.js */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D3K8325SNT"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D3K8325SNT');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${pacifico.variable}`}>
       
        {children}
      </body>
    </html>
  );
}
// 