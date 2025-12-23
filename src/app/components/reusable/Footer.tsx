
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';
import logo from '@/assets/logo/white_logo.jpg'


export default function Footer() {

let logoSrc=logo
let companyName = 'InfoZenX IT'

  return (
    <footer className="site-footer">
      <div className="footer-inner container-fluid px-10">
        <div className="footer-top">
          <div className="brand ">
            <div className="logo-wrap" aria-hidden>
              {/* If you don't use next/image, replace with regular <img /> */}
              <Image src={logoSrc} alt={`${companyName} logo`}  height={80} />
            </div>
            <div className="brand-info py-4">
              <h3 className="brand-title">{companyName}</h3>
              <p className="brand-sub">Smart solutions · Zen experience</p>
            </div>
          </div>

          <nav className="footer-nav container mt-3 px-5" aria-label="Footer navigation">
            <div className="nav-col">
              <h4>Resources</h4>
              <ul>
  
                  <li> <Link href={'/services'}>Services</Link></li>
                <li><Link href={'/internship'}>Internship</Link></li>
                <li><Link href={'/career'}>Career</Link></li>

              </ul>
            </div>

            <div className="nav-col">
              <h4>Company</h4>
              <ul>
               <li> <Link href={'/about'}>About</Link></li>
               <li> <Link href={'/gallery'}>Gallery</Link></li>

                <li><Link href={'/contact'}>Contact</Link></li>
              </ul>
            </div>

     

            <div className="nav-col subscribe">
              {/* <h4>Social Media</h4> */}
            
              <div className="socials" aria-hidden>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61584575266481" className="social"><FiFacebook size={18} /></a>
                <a target='_blank' href="https://www.instagram.com/infozenx_it/" className="social"><FiInstagram size={18} /></a>
                <a target='_blank' href='https://www.linkedin.com/company/infozenx-it/posts/?feedView=all' className="social"><FiLinkedin size={18} /></a>
              </div>
            </div>
            <div>
              
            </div>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>All copyrights reserved © {new Date().getFullYear()} - {companyName}</p>
        </div>
      </div>
    </footer>
  );
}


/*
  File: footer.scss
  Place this file next to Footer.tsx (or in your styles folder) and import it from the TSX file.
  It uses your variables file via @use "../abstracts/variables" as vars;
*/

