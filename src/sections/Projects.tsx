import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
function Project() {
    const projectsData = [
        {
            image: "/trello_project.png",
            projectName: "Trello Clone",
            projectLink: "",
            projectDescription:
                "This web project focus on teamwork and project management. It has a lot of features like creating, editing, deleting, and moving cards. It also has a dark mode and is highly scalable.",
            projectTech: [
                "MongoDB",
                "Express",
                "React",
                "NodeJS",
                "Redux Toolkit",
                "Material UI",
                "Javascript",
            ],
            projectExternalLinks: {
                github: "https://github.com/minhnghia2k3/trello_web",
                externalLink: "",
            },
        },
        {
            image: "/whatsapp_project.jpg",
            projectName: "Whatsapp Clone",
            projectLink: "",
            projectDescription:
                "This is a chat app made with NextJS and NodeJS that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React.",
            projectTech: [
                "React",
                "NextJS",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "Sockets",
                "Prisma",
                "Firebase",
                "PortgresSQL",
            ],
            projectExternalLinks: {
                github: "https://github.com/minhnghia2k3/clone_whatsapp",
                externalLink: "",
            },
        },
        {
            image: "/loader.gif",
            projectName: "Updating...",
            projectLink: "",
            projectDescription:
                "Updating...",
            projectTech: [
                ""
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
                                            target="_blank"
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