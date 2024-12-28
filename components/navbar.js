'use client'; // Asegura que el componente es un Client Component
import React, { useState } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
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
                        <Image src="/bc.png" alt="logo" width={50} height={50} />
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
                        <a className={`navbar-item ${pathname === '/about-us' ? 'is-selected' : ''}`} href="/about-us"> About us </a>
                        <a className={`navbar-item ${pathname === '/blog' ? 'is-selected' : ''}`} href="/blog"> Blog </a>
                        <a className={`navbar-item ${pathname === '/contact' ? 'is-selected' : ''}`} href="/contact"> Contact </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
