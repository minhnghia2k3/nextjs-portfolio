import Link from 'next/link';
import React from 'react';
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter
} from "react-icons/fi"
function SocialIcons() {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/minhnghia2k3" },
        { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com/emnghia_2k3" },
        { name: "Youtube", icon: <FiYoutube />, link: "/" },
        { name: "Linkedin", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/minhnghia2k3/" },
        { name: "Twitter", icon: <FiTwitter />, link: "/" },
    ]
    return (
        <div className="social-icons">
            <ul className="social-icons-list">
                {socialLinks.map(({ name, icon, link }) => (
                    <li key={name} title={name} className="social-icons-list-item">
                        <Link href={link} target="_blank" className="social-icons-list-link">{icon}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialIcons;