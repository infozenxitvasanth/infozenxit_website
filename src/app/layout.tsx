
import { Pacifico, Poppins } from "next/font/google";
import "../styles/scss/main.scss";
import './globals.css';
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
