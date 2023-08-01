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
                        with experience at Quoc Thuan Company and teaching Coding at Technology School MindX.
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in designing and developing high-quality websites that serve teamwork needs, like &quot;Trello,&quot; &quot;Webchat,&quot; and more.
                        Proudly part of the&nbsp;
                        <Link href="/" className="link" target="_blank">
                            DNTU
                        </Link>
                        &nbsp;team! 🚀.
                    </p>

                    <p className="about-grid-info-text">
                        Additionally, I share my knowledge and passion with the world
                        through my Github, where I share my projects and my experience.
                    </p>
                    {/* <p className="about-grid-info-text">
                        I am also working on a new project called&nbsp;
                        <Link
                            className="link"
                            target="_blank"
                            href="https://frontendvita.com"
                        >
                            FrontendVita,
                        </Link>
                        &nbsp;aimed at enhancing frontend development skills.
                    </p> */}
                    <p className="about-grid-info-text">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">React Native</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">Typescript</li>
                        <li className="about-grid-info-list-item">Redux Toolkit</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Elasticsearch</li>
                        <li className="about-grid-info-list-item">Kibana</li>
                        <li className="about-grid-info-list-item">CSS</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src='/avatar.png' alt='profile' fill />
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default About;