import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function Experience() {
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        const transform = () => {
            const underline = document.querySelector<HTMLElement>('.underline');
            underline!.style.top = `${selected * 2.5}rem`
        }
        transform();
    }, [selected])
    const experiences = [
        {
            name: "MindX",
            role: "Programming Teacher",
            url: "https://mindx.edu.vn/",
            start: "July 2023",
            end: "Present",
            shortDescription: [
                "Switching to programming from the second year of university.",
                "Throughout my work, I have learned a lot of knowledge about programming, teaching, and teamwork.",
            ],
        },
        {
            name: "QTC",
            role: "Technical Staff",
            url: "/",
            start: "January 2022",
            end: "January 2023",
            shortDescription: [
                "Starting an internship early in the first year of university to learn a lot of knowledge as well as work experience in a business",
                "I had experience working on a network devices such as 'Cisco', 'SonicWall', 'Fortinet', 'Checkpoint'.",
                "Throughout my work, I have learned a lot of knowledge about network devices, network security, and network infrastructure.",
                "Furthermore, I also represent the company to train new students / employees on their knowledge.",
            ],
        },

        {
            name: "ACES",
            role: "President",
            url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
            start: "November 2019",
            end: "November 2020",
            shortDescription: [
                "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
                "Additionally, I secured sponsorships from reputable brands to support our events.",
                "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
            ],
        },
        {
            name: "ISTE",
            role: "Web Developer",
            url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
            start: "November 2019",
            end: "November 2020",
            shortDescription: [
                "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
            ],
        },
        {
            name: "Shashaan",
            role: "Founder",
            url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
            start: "November 2018",
            end: "November 2021",
            shortDescription: [
                "While still a student, I founded a web hosting company that offered affordable hosting services.",
                "With over 300 customers, the business thrived until I graduated and sold it to another company.",
            ],
        },
    ];
    return (
        <motion.div
            className='experience'
            id='experience'
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}>
            <div className="title">
                <h2>Where I&apos;ve worked</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {experiences.map((experience, index) => (
                        <li
                            key={index}
                            className={`exp-slider-item ${index === selected && 'exp-slider-item-selected'}`}
                            onClick={() => setSelected(index)}>
                            <span>{experience.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className='exp-details-position-company'>
                                &nbsp;@&nbsp;
                                <Link className='link' href={experiences[selected].url}>{experiences[selected].name}</Link>
                            </span>
                        </h3>
                        <p className='exp-details-range'>
                            {experiences[selected].start} - {experiences[selected].end}
                        </p>
                        <ul className="exp-details-list">
                            {
                                experiences[selected].shortDescription.map((description, index) => (
                                    <li className="exp-details-list-item" key={index}>{description}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;