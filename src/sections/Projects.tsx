import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
function Project() {
    const projectsData = [
        {
            image: "/loader.gif",
            projectName: "Phuong Thao Furniture",
            projectLink: "",
            projectDescription:
                "Website is dedicated to providing customers with a wide selection of high-quality furniture options.",
            projectTech: [
                "MongoDB",
                "Express",
                "NextJS 13",
                "NodeJS",
                "TailwindCSS",
                "Javascript",
            ],
            projectExternalLinks: {
                github: "",
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
            image: "/promptopia-project.png",
            projectName: "Promptopia",
            projectLink: "https://minhnghia2k3-promptopia.vercel.app/",
            projectDescription:
                "This website focus share AI prompt between users. This website is just focus on learning & practicing how NextJS work.",
            projectTech: [
                "Nextjs 13",
                "Javascript",
                "Server-less",
                "SEO",
                "App Router",
                "NextAuth",
                "MongoDB",
                "Google Providers"
            ],
            projectExternalLinks: {
                github: "https://github.com/minhnghia2k3/promptopia",
                externalLink: "https://minhnghia2k3-promptopia.vercel.app/",
            },
        },
        {
            image: "/threads-app.png",
            projectName: "Threads app",
            projectLink: "https://minhnghia2k3-threads-app.vercel.app/",
            projectDescription:
                "Clone website called Threads. This website is a social media website that allows users to share their thoughts and ideas with the world.",
            projectTech: [
                "Nextjs 13",
                "TypeScript",
                "Server-less",
                "App Router",
                "Clerk",
                "MongoDB",
                "Google Providers"
            ],
            projectExternalLinks: {
                github: "https://github.com/minhnghia2k3/threads_app",
                externalLink: "https://minhnghia2k3-threads-app.vercel.app/",
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
                                <Image src={image} width={600} height={350} alt={projectName} quality={100}></Image>
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