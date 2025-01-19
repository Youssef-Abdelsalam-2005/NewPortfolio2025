export async function GET() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      links: [
        { text: "Visit Website", url: "#" },
        { text: "View Code", url: "#" }
      ]
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting with interactive maps and alerts.",
      tech: ["React", "TypeScript", "OpenWeather API"],
      links: [
        { text: "Try It Out", url: "#" },
        { text: "View Code", url: "#" }
      ]
    },
    {
      title: "Portfolio Generator",
      description: "Create stunning portfolios with customizable templates.",
      tech: ["Vue.js", "Tailwind", "Supabase"],
      links: [
        { text: "Live Demo", url: "#" },
        { text: "View Code", url: "#" }
      ]
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot powered by machine learning algorithms.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      links: [
        { text: "Try It Out", url: "#" },
        { text: "View Code", url: "#" }
      ]
    },
    {
      title: "Music Player",
      description: "Stream and manage your music with this elegant player.",
      tech: ["React Native", "Expo", "Web Audio API"],
      links: [
        { text: "Download", url: "#" },
        { text: "View Code", url: "#" }
      ]
    },
    {
      title: "Task Manager",
      description: "Stay organized with this intuitive task management system.",
      tech: ["Angular", "Firebase", "Material UI"],
      links: [
        { text: "Visit App", url: "#" },
        { text: "View Code", url: "#" }
      ]
    }
  ];

  // Generate widths for pairs of projects
  for (let i = 0; i < projects.length; i += 2) {
    // For each pair, generate a random width for the first project
    const firstWidth = Math.floor(Math.random() * 40) + 30; // Random number between 30 and 70
    // The second width is what remains from 100
    const secondWidth = 100 - firstWidth;

    projects[i].width = firstWidth;
    // If there's a second project in the pair, assign its width
    if (i + 1 < projects.length) {
      projects[i + 1].width = secondWidth;
    }
  }

  return Response.json({ projects });
}
