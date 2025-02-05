"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPressure from "./components/text/TextPressure";

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
    date: "October 2024 - January 2025",
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

const getProjects = () => {
  const projects = [
    {
      title: "VerifAI",
      description:
        "Identified and addressed the challenge of distinguishing between AI-generated content and authentic media • Developing advanced model for accurate distinction between human-created and AI-generated images • Implemented secure authentication, encrypted sharing, and optimized performance for seamless UX",
      tech: ["Next.js", "Auth0", "MongoDB", "Prisma"],
      links: [
        { text: "Visit Website", url: "https://isitreal-ten.vercel.app" },
      ],
    },
    {
      title: "Super Resolution Research",
      description:
        "Compared different super-resolution methods to make my model • Designed model using CNNs to upscale images to achieve training and testing accuracies of 79.9% and 81.1% respectively",
      tech: ["Tensorflow", "Keras", "NumPy", "Pillow", "Matplotlib"],
      links: [
        {
          text: "Read the paper",
          url: "https://docs.google.com/document/d/1QNaife9gFpC0sPLoqbTMLohvqakh48oBw7It5ORFvb4/",
        },
        {
          text: "View Code",
          url: "https://github.com/Youssef-Abdelsalam-2005/Super-Resolution-Research",
        },
      ],
    },
    {
      title: "News Classifier AI",
      description:
        "Built a scraper that extracts titles and all the relevant content from HTML files • Engineered a deep learning model, configuring dense layers with ReLU activation functions to facilitate precise news classification, achieving a 99.8% accuracy on the test data • Integrated GloVe word embeddings and TF-IDF, augmenting the model's semantic understanding",
      tech: ["DeepLearning4J", "GloVe"],
      links: [
        {
          text: "View Code",
          url: "https://github.com/Youssef-Abdelsalam-2005/NewsClassifierAI",
        },
      ],
    },
    {
      title: "PromtFast",
      description:
        "Created a fully responsive and user-friendly design using React • Developed a backend API that acts as a middleman to receive, format, and send data between DataMuse API and the front end",
      tech: ["React", "Node.js"],
      links: [
        {
          text: "See Landing Page",
          url: "https://prompt-fast-waitlist-frontend.vercel.app/",
        },
        {
          text: "View Code",
          url: "https://github.com/Youssef-Abdelsalam-2005/PromptFastPublic",
        },
      ],
    },
    {
      title: "Deep Fake Detection",
      description:
        "Preprocessed the images by grayscaling and normalizing them to be more efficient and consume less memory • Constructed a classification model with convolutional layers and ReLu and Sigmoid functions • Implemented a face detection model that crops the image",
      tech: ["Tensorflow", "Keras", "Pandas", "NumPy", "Pillow"],
      links: [],
    },
    {
      title: "Portfolio Generator",
      description: "A platform for creating and designing portfolios using AI",
      tech: ["Angular", "Spring"],
      links: [{ text: "Coming Soon", url: "#" }],
    },
  ];

  projects.sort(() => Math.random() - 0.5);
  return projects;
};

const getProjectSize = (index, total) => {
  // Create a more dynamic and interesting pattern
  const pattern = [
    "project-size-large",
    "project-size-wide",
    "project-size-small",
    "project-size-small",
    "project-size-wider",
    "project-size-small",
  ];
  return pattern[index % pattern.length];
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projects, setProjects] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [theme, setTheme] = useState("light");
  const [isPortfoliosOpen, setIsPortfoliosOpen] = useState(false);

  useEffect(() => {
    const addRandomDot = () => {
      const dot = document.createElement("div");
      dot.className = "random-dot";
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
      dot.style.width = `${Math.random() * 2 + 2}px`; // Larger size
      dot.style.height = dot.style.width;
      dot.style.opacity = Math.random() * 0.5 + 0.5; // Higher opacity
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 2000); // Longer duration
    };

    // Create multiple dots at once
    const createDots = () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(addRandomDot, i * 200);
      }
    };

    const interval = setInterval(createDots, 1000); // More frequent interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const projects = getProjects();
    setProjects(projects);
  }, []);

  useEffect(() => {
    // Check initial theme preference
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#fafafa");
      document.documentElement.style.setProperty("--accent", "#9333ea");
      document.documentElement.style.setProperty("--muted", "#a3a3a3");
      document.documentElement.style.setProperty(
        "--card-border",
        "rgba(163, 163, 163, 0.2)"
      );
      document.documentElement.style.setProperty(
        "--card-bg",
        "rgba(10, 10, 10, 0.5)"
      );
      document.documentElement.style.setProperty(
        "--accent-transparent",
        "rgba(147, 51, 234, 0.1)"
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background", "#fafafa");
      document.documentElement.style.setProperty("--foreground", "#171717");
      document.documentElement.style.setProperty("--accent", "#7928ca");
      document.documentElement.style.setProperty("--muted", "#737373");
      document.documentElement.style.setProperty(
        "--card-border",
        "rgba(115, 115, 115, 0.2)"
      );
      document.documentElement.style.setProperty(
        "--card-bg",
        "rgba(250, 250, 250, 0.5)"
      );
      document.documentElement.style.setProperty(
        "--accent-transparent",
        "rgba(121, 40, 202, 0.1)"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#fafafa");
      document.documentElement.style.setProperty("--accent", "#9333ea");
      document.documentElement.style.setProperty("--muted", "#a3a3a3");
      document.documentElement.style.setProperty(
        "--card-border",
        "rgba(163, 163, 163, 0.2)"
      );
      document.documentElement.style.setProperty(
        "--card-bg",
        "rgba(10, 10, 10, 0.5)"
      );
      document.documentElement.style.setProperty(
        "--accent-transparent",
        "rgba(147, 51, 234, 0.1)"
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background", "#fafafa");
      document.documentElement.style.setProperty("--foreground", "#171717");
      document.documentElement.style.setProperty("--accent", "#7928ca");
      document.documentElement.style.setProperty("--muted", "#737373");
      document.documentElement.style.setProperty(
        "--card-border",
        "rgba(115, 115, 115, 0.2)"
      );
      document.documentElement.style.setProperty(
        "--card-bg",
        "rgba(250, 250, 250, 0.5)"
      );
      document.documentElement.style.setProperty(
        "--accent-transparent",
        "rgba(121, 40, 202, 0.1)"
      );
    }
  };
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

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
            <div className="flex items-center space-x-8">
              <a href="#about" className="nav-link">
                Work
              </a>
              <a href="#work" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--card-border)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 pt-32">
          <section className="min-h-[80vh] flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[9rem] md:text-[20rem] font-bold mb-6 font-humane"
            >
              <TextPressure
                text="Youssef"
                flex={true}
                alpha={false}
                stroke={true}
                width={true}
                weight={true}
                italic={true}
                textColor="text-[var(--primary)]"
                strokeColor="text-[var(--primary)]"
                minFontSize={36}
              />
              <TextPressure
                text="Abdelsalam"
                flex={true}
                alpha={false}
                stroke={true}
                width={true}
                weight={true}
                italic={true}
                textColor="text-[var(--primary)]"
                strokeColor="text-[var(--primary)]"
                minFontSize={36}
              />
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
                <h2 className="text-2xl md:text-3xl font-bold mb-12">
                  Experiences
                </h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`project-card ${getProjectSize(
                    index,
                    projects.length
                  )}`}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                >
                  <div className="project-bg" />
                  <div className="project-content">
                    <div>
                      <motion.h3
                        className="text-xl md:text-2xl font-bold mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-xs md:text-sm text-[var(--muted)] mb-4">
                        {project.tech.join(" • ")}
                      </p>
                      <p className="text-xs md:text-sm text-[var(--muted)]">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      className="mt-6 flex items-center space-x-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs md:text-sm hover:text-[var(--accent)] transition-colors"
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
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <motion.a
                href="https://github.com/Youssef-Abdelsalam-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                More on GitHub
                <svg
                  className="w-2.5 h-2.5 ml-1.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  />
                </svg>
              </motion.a>
            </div>
          </section>

          <section id="contact" className="py-20 mb-20">
            <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
            <div className="max-w-2xl">
              <p className="text-lg mb-8">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me for any inquiries or just to say hi!
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
        <footer className="border-t border-[var(--card-border)] py-6 mt-20">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4 relative">
              <span className="font-pilowlava text-xl">YA</span>
              <div className="relative">
                <button
                  onClick={() => setIsPortfoliosOpen(!isPortfoliosOpen)}
                  className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center"
                >
                  Previous Portfolios
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isPortfoliosOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute bottom-full mb-2 left-0 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-2 transition-all duration-200 ${
                    isPortfoliosOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-2"
                  }`}
                >
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://youssef-abdelsalam-2005.github.io/ybportfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs whitespace-nowrap hover:text-[var(--accent)] transition-colors"
                    >
                      v1 →
                    </a>
                    <a
                      href="https://youssef-abdelsalam-2005.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs whitespace-nowrap hover:text-[var(--accent)] transition-colors"
                    >
                      v2 →
                    </a>
                    <a
                      href="https://youssef-abdelsalam-2005.github.io/FInalFinalPortfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs whitespace-nowrap hover:text-[var(--accent)] transition-colors"
                    >
                      v3 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="flex items-center justify-end space-x-4"
              onMouseOver={() =>
                (document.getElementById("ai-text").innerHTML = "maybe a lot")
              }
              onMouseLeave={() =>
                (document.getElementById("ai-text").innerHTML =
                  "Made with some help from AI")
              }
            >
              <span
                className="text-xs text-[var(--muted)] cursor-default"
                id="ai-text"
              >
                Made with some help from AI
              </span>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
