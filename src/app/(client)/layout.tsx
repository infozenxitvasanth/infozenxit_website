import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "../../styles/scss/main.scss";
import '../globals.css';
import Navbar from "../components/reusable/Navbar";
import Footer from "../components/reusable/Footer";
import { createMetadata } from "../utils/metaTags";
import Cursor from "../components/reusable/Cursor";



export const metadata = createMetadata({
  title: "InfoZenX IT - Business Website & App Solutions",
  description: "Professional IT services, web development, mobile apps, and digital transformation solutions",
  endpoint: "   ",
  siteName: "InfoZenX IT - Business Website & App Solutions",
});
export default function ClientRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
     <div>
        <Cursor/>
            <Navbar />
                {children}
                <Footer/>
     </div>
    );
}
