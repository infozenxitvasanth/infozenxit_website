
import { Poppins } from "next/font/google";
import "../styles/scss/main.scss";
import './globals.css';
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
       
        {children}
      </body>
    </html>
  );
}
