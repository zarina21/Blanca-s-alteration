'use client'; // Asegura que el componente es un Client Component

import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importa los íconos de Facebook e Instagram
import Link from 'next/link'; // Para manejar enlaces

const Footer = () => {
    return (
        <footer className="footer has-background-light">
            <div className="content has-text-centered">
                <p>
                    <strong>Blanca Alterations</strong><br />
                    35250 Date Palm Dr Suite C, Cathedral City, CA 92234<br />
                    Email: <a href="mailto:info@blancaalterations.com">info@blancaalterations.com</a>
                </p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon is-large">
                        <FaInstagram size={24} />
                    </a>
                </div>
                <div className="links">
                    <Link href="/terms-and-conditions">
                        Términos y Condiciones
                    </Link>
                    {' | '}
                    <Link href="/privacy-policy">
                        Política de Privacidad
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
