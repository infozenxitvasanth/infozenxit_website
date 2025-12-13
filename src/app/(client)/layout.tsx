import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "../../styles/scss/main.scss";
import '../globals.css';
import Navbar from "../components/reusable/Navbar";
import Footer from "../components/reusable/Footer";
import { createMetadata } from "../utils/metaTags";



export const metadata = createMetadata({
  title: "Home — MySite",
  description: "Home page description",
  endpoint: "/about",
  siteName: "MySite  About",
});
export default function ClientRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
     <div>
            <Navbar />
                {children}
                <Footer/>
     </div>
    );
}
