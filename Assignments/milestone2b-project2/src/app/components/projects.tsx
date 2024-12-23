import { ExternalLink, Github } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image';
import Link from 'next/link';
import Section from './layout/section';

const projectData = [
    {
        id: 1,
        title: "Video Streaming Service",
        category: "FULL-STACK",
        description: "A scalable platform for video-on-demand with personalized recommendations and seamless user experience.",
        imageUrl: "/project1.png",
        visitLink: "https://netflixweb-clone.vercel.app/",
        githubLink: "https://github.com/abbas-asad/Html_Css_Web_Projects/tree/main/netflix_clone/",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        category: "FRONT-END",
        description: "An online retail store offering intuitive navigation, product discovery, and a smooth checkout experience.",
        imageUrl: "/project2.png",
        visitLink: "https://luxemart.vercel.app/",
        githubLink: "https://github.com/abbas-asad/Ecommerce-Website/",
    },
    {
        id: 3,
        title: "Time Tracking App",
        category: "FULL-STACK",
        description: "An advanced tool for time tracking with customizable workflows and real-time performance analytics.",
        imageUrl: "/project3.png",
        visitLink: "https://pakistantimer.vercel.app/",
        githubLink: "https://github.com/abbas-asad/Html_Css_Js_Projects/tree/main/Pakistan_timer/",
    },
    {
        id: 4,
        title: "URL Shortener",
        category: "FULL-STACK",
        description: "A platform for shortening URLs with built-in analytics to track link performance and optimize campaigns.",
        imageUrl: "/project4.png",
        visitLink: "https://tiny-linker.vercel.app/",
        githubLink: "",
    },
    {
        id: 5,
        title: "Portfolio Website",
        category: "FRONT-END",
        description: "A responsive digital portfolio to showcase work, skills, projects, and achievements to introduce myself.",
        imageUrl: "/project5.png",
        visitLink: "https://abbasasad.vercel.app/",
        githubLink: "https://github.com/abbas-asad/Portfolio-Website/",
    },
    {
        id: 6,
        title: "Collaborative Code Editor",
        category: "FULL-STACK",
        description: "A real-time web-based code editor with collaboration features for development teams for better results.",
        imageUrl: "/project6.png",
        visitLink: "https://ultraedit-web.vercel.app/",
        githubLink: "https://github.com/abbas-asad/Html_Css_Web_Projects/tree/main/ultraedit_clone/",
    },
];

export default function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Projects</h2>
                <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover my latest projects that showcase innovation and creativity in full-stack development.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-xl bg-slate-800 transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(56,178,172,0.6)] hover:-translate-y-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20" />
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={'1000'}
                            height={'1000'}
                            className="h-48 w-full object-cover object-center transition-all duration-300 group-hover:scale-110 group-hover:opacity-50"
                        />
                        <div className="relative z-10 p-6">
                            <h3 className="text-xl font-bold text-white transition-colors duration-300 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-300 group-hover:text-white/90 transition-colors duration-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <Link
                                    href={project.visitLink}
                                    className={cn(
                                        "inline-flex items-center rounded-full transition-all duration-300 ease-in-out px-3 py-1",
                                        "bg-teal-500/10 text-teal-300",
                                        "hover:bg-white hover:text-teal-500 hover:shadow-[0_0_20px_rgba(56,178,172,0.7)]"
                                    )}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Visit
                                </Link>
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "inline-flex items-center rounded-full transition-all duration-300 ease-in-out px-3 py-1",
                                        "bg-teal-500/10 text-teal-300",
                                        "hover:bg-white hover:text-teal-500 hover:shadow-[0_0_20px_rgba(56,178,172,0.7)]"
                                    )}
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-300 shadow-[0_0_10px_rgba(56,178,172,0.7)] transition-all duration-300 group-hover:w-full" />
                        <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-teal-500/20 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:opacity-100 opacity-0" />
                    </div>
                ))}
            </div>
        </Section>
    );
}

