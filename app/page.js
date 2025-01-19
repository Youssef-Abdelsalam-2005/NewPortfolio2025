"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Software Engineer Intern",
    date: "November 2024 - Current",
    company: "Bila (YC W24)",
    location: "Dubai, UAE",
    description: [
      "Developed and maintained GraphQL API’s for invoice management enhancing financial tracking and reporting capabilities, and ensuring a seamless integration with the frontend.",
      "Implemented role-based access control in the frontend in Next.js and backend in Nest.js, ensuring secure and efficient permission management across the platform.",
      "Integrating Circle and USDC solutions to streamline transactions and enhance financial operations.",
    ],
  },
  {
    title: "Backend Engineer",
    date: "October 2024 - Current",
    company: "University of Birmingham Dubai - BrumBot",
    location: "Dubai, UAE",
    description: [
      "Collaborating with a cross-functional team of engineers, designers, and project managers to develop a site to help thousands of students with their university life.",
      "Developing backend services for resource uploads, JWT authorization, and chatbot integration with function calling using Langchain and OpenAI.",
    ],
  },
  {
    title: "Engineer",
    date: "October 2024 - December 2024",
    company: "University of Birmingham Dubai - Formula Student",
    location: "Dubai, UAE",
    description: [
      "Collaborating with the suspension and vehicle dynamics team to successfully design and integrate the body, suspension, tires, and steering for the car ensuring enhanced vehicle performance within a $100k+ budget.",
    ],
  },
  {
    title: "Software Engineer Intern",
    date: "March 2024 - June 2024",
    company: "Klik",
    location: "Dubai, UAE",
    description: [
      "Achieved a 45% increase in recommendation accuracy by designing and implementing advanced data science algorithms in Neo4j for the friend and space recommendation system.",
      "Boosted user engagement by 30% through the development of microservices using Spring and the integration of real-time communication using Ably, facilitating seamless interaction among users.",
    ],
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projects, setProjects] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const addRandomDot = () => {
      const dot = document.createElement("div");
      dot.className = "random-dot";
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 2000);
    };

    const interval = setInterval(addRandomDot, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <div className="min-h-screen">
        <nav className="fixed top-0 w-full bg-[var(--card-bg)] backdrop-blur-sm z-40 border-b border-[var(--card-border)]">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold font-pilowlava cursor-pointer"
            >
              YA
            </motion.div>
            <div className="space-x-8">
              <a href="#work" className="nav-link">
                Work
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-32">
          <section className="min-h-[80vh] flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12rem] md:text-[20rem] font-bold mb-6 font-humane"
            >
              Youssef Abdelsalam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--muted)] max-w-2xl"
            >
              Passionate self-taught software engineer with a strong passion for
              creating experiences. Strong background in AI and Computer
              Science.
            </motion.p>
          </section>

          <section id="about" className="py-20">
            <motion.h2 className="text-3xl font-bold mb-12">About Me</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div whileHover={{ scale: 1.02 }}>
                <p className="text-lg mb-6">
                  I'm a developer who believes in the perfect balance between
                  functionality and visual aesthetics. Every line of code I
                  write aims to create something meaningful and beautiful.
                </p>
                <p className="text-[var(--muted)]">
                  When I'm not coding, you might find me experimenting with new
                  technologies or adding random dots to websites.
                </p>
              </motion.div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 pl-4 cursor-pointer"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                    whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                    style={{ borderColor: "var(--accent-transparent)" }}
                  >
                    {exp.title && <h3 className="font-bold">{exp.title}</h3>}
                    {exp.role && <h3 className="font-bold">{exp.role}</h3>}
                    <p className="text-sm text-[var(--muted)]">
                      {exp.company} • {exp.period || exp.date}
                    </p>
                    <motion.div
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc pl-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="mb-2 text-xs text-gray-500">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="py-20">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
            <div className="flex flex-wrap gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ width: `calc(${project.width}% - 12px)` }}
                  className={`project-card group relative ${
                    index === 1 || index === 4
                      ? "min-h-[250px]"
                      : index === 2
                      ? "min-h-[350px]"
                      : "min-h-[300px]"
                  } flex flex-col justify-between`}
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-4"
                    >
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-[var(--muted)] mb-4">
                        {project.tech.join(" • ")}
                      </p>
                    </motion.div>
                    <p className="text-[var(--muted)]">{project.description}</p>
                  </div>
                  <motion.div
                    className="mt-6 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm hover:text-[var(--accent)] transition-colors"
                      >
                        {link.text}
                        <svg
                          className="w-4 h-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          />
                        </svg>
                      </a>
                    ))}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--card-bg)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </section>
          <section id="contact" className="py-20 mb-20">
            <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
            <div className="max-w-2xl">
              <p className="text-lg mb-8">
                Have a project in mind? Let's create something amazing together.
              </p>
              <a
                href="mailto:youssef.abdelsalam1234@gmail.com"
                className="inline-block text-lg font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
              >
                youssef.abdelsalam1234@gmail.com
              </a>
              <div className="mt-8 flex gap-6">
                <a
                  href="https://github.com/Youssef-Abdelsalam-2005"
                  className="nav-link"
                >
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/yxa/" className="nav-link">
                  LinkedIn
                </a>
                <a
                  href="https://docs.google.com/document/d/1JilFgQF06de65gxCeKpmTf3GEbqO_KpXboPfLxRB61g/edit?tab=t.0"
                  className="nav-link"
                >
                  CV
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
