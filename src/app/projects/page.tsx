import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "AI-Powered Personal Finance Tracker",
    description: "A web app that categorizes expenses automatically and provides insights into spending habits using machine learning.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "finance dashboard",
    tags: ["React", "Node.js", "AI", "PostgreSQL"],
    projectUrl: "#",
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "An interactive whiteboard application allowing multiple users to draw and brainstorm together in real-time.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "digital whiteboard",
    tags: ["Next.js", "WebSockets", "TypeScript"],
    projectUrl: "#",
  },
  {
    title: "Home Automation System with Raspberry Pi",
    description: "A custom system to control lights, temperature, and appliances remotely using a Raspberry Pi and a custom web interface.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "smart home",
    tags: ["Python", "IoT", "Flask", "Hardware"],
    projectUrl: "#",
  },
  {
    title: "E-commerce Platform for Local Artisans",
    description: "A full-featured e-commerce site designed to help local artists sell their creations online, with a custom CMS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Vue.js", "Firebase", "Stripe"],
    projectUrl: "#",
  },
  {
    title: "Mobile App for Language Learning",
    description: "A gamified mobile app that makes learning a new language fun and interactive through quizzes, flashcards, and challenges.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    tags: ["React Native", "Gamification", "UI/UX"],
    projectUrl: "#",
  },
  {
    title: "Data Visualization of Climate Change",
    description: "An interactive dashboard that visualizes global climate data over the last century, highlighting trends and impacts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data chart",
    tags: ["D3.js", "Data Science", "API"],
    projectUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          My Work & Creations
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that I've designed, coded, and deployed.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
