'use client'; // Asegura que el componente es un Client Component

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <nav className="navbar is-fixed-top navbar-custom">
                <div className="navbar-brand">
                    <a className="logo" href="/">
                        <img src="/bc.png" alt="logo" width={50} height={50} />
                    </a>
                    <div 
                        className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                        onClick={toggleMenu}
                        data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbarExampleTransparentExample">
                    <div className="navbar-end">
                        <a className={`navbar-item ${pathname === '/' ? 'is-selected' : ''}`} href="/"> Home </a>
                        <a className={`navbar-item ${pathname === '/About-us' ? 'is-selected' : ''}`} href="/About-us"> About us </a>
                        <a className={`navbar-item ${pathname === '/Our-services' ? 'is-selected' : ''}`} href="/Our-services"> Our services </a>
                        <a className={`navbar-item ${pathname === '/Contact' ? 'is-selected' : ''}`} href="/Contact"> Contact </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
