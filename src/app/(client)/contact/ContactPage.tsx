
import styles from "../styles/ContestPage.module.scss";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "@/app/components/reusable/form/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className={`max-w-6xl mx-auto px-6 py-16 contact-page`}>
      <header className="text-center mb-10">
        <h1 className="text-3xl text-white font-bold">Contact Us</h1>
        <div className={`underline mx-auto mt-3`} />
        <p className="text-sm text-slate-300 mt-4">
          Get in touch with InfoZenX IT. We'd love to hear from you and discuss how we can help your business grow.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className={"contact-card"}>
          <div className={'contact-iconCircle'}><FiPhone size={20} /></div>
          <h4 className="font-semibold mt-3 text-white">Phone</h4>
          <p className="text-sm text-slate-200 mt-2">+91 94861 88648</p>
          <p className="text-sm text-slate-200 mt-2">+91 72002 86091</p>

        </div>

        <div className={"contact-card"}>
          <div className={"contact-iconCircle"}><FiMail size={20} /></div>
          <h4 className="font-semibold mt-3 text-white">Email</h4>
          <p className="text-sm text-slate-200 mt-2">infozenxit@gmail.com</p>
        </div>

        <div className={"contact-card"}>
          <div className={"contact-iconCircle"}><FiMapPin size={20} /></div>
          <h4 className="font-semibold mt-3 text-white">Location</h4>
          <p className="text-slate-200">Upstair, Tower Jn, Sivaraj Building 2nd Floor, Rose Centre, Nagercoil, Tamil Nadu 629001</p>
          <p className="text-sm text-slate-500 mt-2">India</p>
        </div>
      </section>

      <main className="flex justify-center">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
