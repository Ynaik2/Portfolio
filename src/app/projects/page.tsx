import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "AI-Powered Personal Finance Tracker",
    description: "A web app that categorizes expenses and provides insights into spending habits using machine learning.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "finance dashboard",
    tags: ["React", "Node.js", "AI", "PostgreSQL"],
    projectUrl: "#",
    details: "This project leverages a custom-trained machine learning model to analyze transaction descriptions and categorize them with high accuracy. The frontend is built with React and uses Chart.js for data visualization, providing users with a clear overview of their financial health. The backend is a Node.js API with a PostgreSQL database to store user data securely."
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "An interactive whiteboard application allowing multiple users to draw and brainstorm together in real-time.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "digital whiteboard",
    tags: ["Next.js", "WebSockets", "TypeScript"],
    projectUrl: "#",
    details: "Built with Next.js and TypeScript, this application uses WebSockets to enable real-time communication between multiple clients. Users can draw, write, and add shapes simultaneously, with all changes instantly reflected for all participants. The project focuses on low-latency updates and a smooth, intuitive user experience."
  },
  {
    title: "Home Automation System with Raspberry Pi",
    description: "A custom system to control lights and appliances remotely using a Raspberry Pi and a custom web interface.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "smart home",
    tags: ["Python", "IoT", "Flask", "Hardware"],
    projectUrl: "#",
    details: "This IoT project combines hardware and software to create a smart home hub. A Flask server running on a Raspberry Pi controls various electronic components, including relays for lights and sensors for temperature. The custom-built web interface allows for remote control and monitoring of the system from any device."
  },
  {
    title: "E-commerce Platform for Local Artisans",
    description: "A full-featured e-commerce site to help local artists sell their creations online, with a custom CMS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Vue.js", "Firebase", "Stripe"],
    projectUrl: "#",
    details: "This full-featured e-commerce site provides a platform for local artists to showcase and sell their work. It's built on Vue.js with a Firebase backend for data storage and authentication. Stripe integration handles secure payment processing, and a custom Content Management System (CMS) allows artisans to manage their products easily."
  },
  {
    title: "Mobile App for Language Learning",
    description: "A gamified mobile app that makes learning a new language fun and interactive through quizzes and challenges.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    tags: ["React Native", "Gamification", "UI/UX"],
    projectUrl: "#",
    details: "A gamified mobile app developed with React Native that makes language learning engaging and fun. It features interactive quizzes, spaced-repetition flashcards, and progress-tracking challenges. The UI/UX is designed to be vibrant and motivating, encouraging users to build a consistent learning habit."
  },
  {
    title: "Data Visualization of Climate Change",
    description: "An interactive dashboard that visualizes global climate data, highlighting trends and impacts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data chart",
    tags: ["D3.js", "Data Science", "API"],
    projectUrl: "#",
    details: "An interactive web dashboard built with D3.js that visualizes complex climate data from public APIs. The project focuses on telling a clear story through data, using animated charts and maps to illustrate global temperature trends, CO2 levels, and their impacts over the past century."
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
