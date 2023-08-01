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
                "Throughout my work, I have learned a lot of knowledge about Basic Programming, Game Development, Web Development, Robotics, and thinking logically.",
                "Furthermore, I have taught many students from many different ages, from 6 to 18 years old.",
                "Working in MindX is my opportunity to learn and improve my knowledge and skills.",
            ],
        },
        {
            name: "QTC",
            role: "Technical Staff",
            url: "https://www.facebook.com/groups/1028105011136702",
            start: "January 2022",
            end: "January 2023",
            shortDescription: [
                "Starting an internship early in the first year of university to learn a lot of knowledge as well as work experience in a business",
                "I had experience working on a network devices such as Cisco, SonicWall, Fortinet, Checkpoint.",
                "Throughout my work, I have learned a lot of knowledge about network devices, network security, and network infrastructure.",
                "Furthermore, I also represent the company to train new students / employees on their knowledge.",
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
                            <span>{experiences[selected]?.role}</span>
                            <span className='exp-details-position-company'>
                                &nbsp;@&nbsp;
                                <Link target="_blank" className='link' href={experiences[selected].url}>{experiences[selected].name}</Link>
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