
import { Pacifico, Poppins } from "next/font/google";
import "../styles/scss/main.scss";
import './globals.css';
import { Metadata } from "next";
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
      <body className={`${poppins.variable} ${pacifico.variable}`}>
       
        {children}
      </body>
    </html>
  );
}
// 