import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
function Project() {
    const projectsData = [
        {
            image: "/project1.png",
            projectName: "Pokedex",
            projectLink: "https://netlify.com",
            projectDescription:
                "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
            projectTech: [
                "React",
                "Redux Toolkit",
                "SCSS",
                "Firebase",
                "Typescript",
                "PokeApi",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/project2.png",
            projectName: "Realtime Chat App",
            projectLink: "https://netlify.com",
            projectDescription:
                "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
            projectTech: [
                "React",
                "Sockets",
                "Node.js",
                "Express",
                "MongoDB",
                "Styled Components",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/project3.png",
            projectName: "Netflix App",
            projectLink: "https://netlify.com",
            projectDescription:
                "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
            projectTech: [
                "React",
                "Node.js",
                "Firebase",
                "MongoDB",
                "Express",
                "Redux Toolkit",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
    ];
    return (
        <motion.div
            className='projects'
            id='work'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>Some thing I&apos;ve built</h2>
            </div>
            <div className="projects-container">
                {projectsData.map(
                    ({ image,
                        projectName,
                        projectLink,
                        projectDescription,
                        projectTech,
                        projectExternalLinks
                    }) => (
                        <div key={projectName} className="project">
                            <div className="project-image">
                                <div className="project-overlay"></div>
                                <div className="project-image-container">
                                    <Image src={image} fill alt={projectName} quality={100}></Image>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-info-overline">Feature Project</div>
                                <div className="project-info-title">{projectName}</div>
                                <div className="project-info-description">
                                    <p>{projectDescription}</p>
                                </div>
                                <ul className="project-info-tech-list">
                                    {projectTech.map((tech) => (
                                        <li className='project-info-tech-list-item' key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <ul className="project-info-links">
                                    <li className="project-info-links-item">
                                        <Link
                                            href={projectExternalLinks.github}
                                            className="project-info-links-item-link"
                                        >
                                            <FiGithub />
                                        </Link>
                                    </li>
                                    <li className="project-info-links-item">
                                        <Link
                                            href={projectExternalLinks.externalLink}
                                            className="project-info-links-item-link"
                                        >
                                            <FiExternalLink />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                )}
            </div>
        </motion.div>
    );
}

export default Project;