import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
function Navbar() {
    const sectionsLink = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#experience" },
        { name: "Work", link: "/#work" },
        { name: "Contact", link: "/#contact" }
    ]
    const [navbarVisible, setNavbarVisible] = useState(false); // Khi scroll
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false); // Khi min-width: 1020px
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
        })
    })
    useEffect(() => {
        const links = document.querySelectorAll('.nav-items-list-link');
        const html = document.querySelector('html');
        const navItems = document.querySelector('.nav-items');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                setResponsiveNavVisible(false);
            })
        })
        html?.addEventListener('click', () => {
            setResponsiveNavVisible(false);
        })
        // Dont want to close nav bar when click on nav-items
        navItems?.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    })
    useEffect(() => {
        const main = document.querySelector('main');
        if (responsiveNavVisible) {
            main?.classList.add('blur');
        } else {
            main?.classList.remove('blur');
        }
    }, [responsiveNavVisible])

    return (
        <nav>
            <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
                <div className="brand">
                    <Link href='/'>
                        <Logo />
                    </Link>
                </div>
                <div className="nav-responsive-toggle">
                    {responsiveNavVisible
                        ?
                        (<CgClose onClick={(e) => {
                            e.stopPropagation();
                            setResponsiveNavVisible(false);
                        }} />)
                        :
                        (<GiHamburgerMenu onClick={(e) => {
                            e.stopPropagation();
                            setResponsiveNavVisible(true);
                        }} />)
                    }
                </div>
                <div className={`nav-items ${responsiveNavVisible ? "nav-responsive" : ""}`} >
                    <ul className="nav-items-list">
                        {sectionsLink.map(({ name, link }) => (
                            <li key={name} className='nav-items-list-item'>
                                <Link href={link} className='nav-items-list-link'>{name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='nav-items-button'>
                        <Button text="Resume" link="http://localhost:3000/resume.pdf" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;