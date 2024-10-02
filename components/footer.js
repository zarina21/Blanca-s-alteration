'use client'; // Asegura que el componente es un Client Component

import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'; // Importa los íconos de Facebook e Instagram
import { SiNextdoor } from "react-icons/si";

import Link from 'next/link'; // Para manejar enlaces

const Footer = () => {
    return (
        <footer className="footer has-background-light">
            <div className="content has-text-centered">
                <p>
                    <strong>"Blancas Alterations"</strong><br />
                    35250 Date Palm Dr Suite C, Cathedral City, CA 92234<br />
                    Email: <a href="mailto:blanca_contact@blancasalteration.com ">blanca_contact@blancasalteration.com </a>
                </p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/alterationsdesert?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/alterations_in_the_desert/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://nextdoor.com/profile/01MRKCwF_KzqdGDbr/?is=feed_author" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <SiNextdoor size={24} />
                    </a>
                    <a href="https://www.yelp.com/biz/blancas-cathedral-city" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <FaYelp size={24} />
                    </a>
                </div>
                <div className="links">
                    <Link href="/terms-and-conditions">
                        Terms and Conditions
                    </Link>
                    {' | '}
                    <Link href="/privacy-policy">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
