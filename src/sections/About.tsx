import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
function About() {
    return (
        <motion.div
            className='about'
            id='about'
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className='about-grid'>
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hey there, tech enthusiast!🖐️ <br />
                        I&apos;m a Junior Student at Dong Nai Technology University School,
                        with experience at&nbsp;
                        <Link className="link" href="https://www.facebook.com/groups/1028105011136702" target='_blank'>
                            Quoc Thuan Company&nbsp;
                        </Link>
                        and teaching Coding at Technology School&nbsp;
                        <Link className="link" href="https://mindx.edu.vn/" target="_blank">
                            MindX.
                        </Link>
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in learning & developing high-quality websites that serve teamwork needs and project managing, like
                        <Link className='link' target="_blank" href="https://minhnghia2k3-promptopia.vercel.app/">
                            &nbsp;Phuong Thao Furinture
                        </Link>,
                        <Link className='link' target="_blank" href="https://github.com/minhnghia2k3/clone_whatsapp">
                            &nbsp;Whatsapp
                        </Link>,
                        <Link className='link' target="_blank" href="https://minhnghia2k3-promptopia.vercel.app/">
                            &nbsp;Promptopia
                        </Link>,
                        <Link className='link' target="_blank" href="https://minhnghia2k3-threads-app.vercel.app/">
                            &nbsp;Threads app&nbsp;
                        </Link>
                        and more.
                        Proudly part of the&nbsp;
                        <Link href="/" className="link" target="_blank" onClick={(event) => event.preventDefault()} >
                            DNTU
                        </Link>
                        &nbsp;team! 🚀.
                    </p>

                    <p className="about-grid-info-text">
                        Additionally, I share my knowledge and passion with the world
                        through my Github, where I share my projects and my experience.
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Typescript</li>
                        <li className="about-grid-info-list-item">TailwindCSS</li>
                        <li className="about-grid-info-list-item">MongoDB</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src='/avatar.jfif' alt='profile' fill />
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default About;