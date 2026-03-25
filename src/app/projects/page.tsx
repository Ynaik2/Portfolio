
import ProjectCard from "@/components/project-card";
import placeholders from "@/app/lib/placeholder-images.json";

const projects = [
  {
    title: "Automated Water Filtering system",
    description: "A hardware-software solution for clean water processing using Arduino and sensors.",
    media: placeholders.projects.water,
    tags: ["Arduino", "C++", "Electronics", "Hardware"],
    projectUrl: "",
    details: "This project features a real-time monitoring system that controls filtration based on water quality sensors. The dashboard displays turbidity and pH levels, ensuring safe output."
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "An interactive whiteboard application allowing multiple users to draw together in real-time.",
    media: placeholders.projects.whiteboard,
    tags: ["Next.js", "WebSockets", "TypeScript"],
    projectUrl: "#",
    details: "Built with Next.js and TypeScript, this application uses WebSockets to enable low-latency communication. Users can draw, write, and add shapes simultaneously."
  },
  {
    title: "Home Automation System with Raspberry Pi",
    description: "A custom system to control lights and appliances remotely using a Raspberry Pi.",
    media: placeholders.projects.home,
    tags: ["Python", "IoT", "Flask", "Hardware"],
    projectUrl: "#",
    details: "This IoT project combines hardware and software to create a smart home hub. A Flask server on a Raspberry Pi controls various relays for lights and monitoring."
  },
  {
    title: "E-commerce Platform for Local Artisans",
    description: "A full-featured e-commerce site to help local artists sell their creations online.",
    media: placeholders.projects.ecommerce,
    tags: ["Vue.js", "Firebase", "Stripe"],
    projectUrl: "#",
    details: "Provides a platform for local artists to showcase work. Built on Vue.js with Firebase for storage and Stripe for secure payments."
  },
  {
    title: "Mobile App for Language Learning",
    description: "A gamified mobile app that makes learning a new language fun and interactive.",
    media: placeholders.projects.language,
    tags: ["React Native", "Gamification", "UI/UX"],
    projectUrl: "#",
    details: "A gamified mobile app developed with React Native. It features interactive quizzes, flashcards, and progress-tracking challenges."
  },
  {
    title: "Data Visualization of Climate Change",
    description: "An interactive dashboard that visualizes global climate data trends.",
    media: placeholders.projects.climate,
    tags: ["D3.js", "Data Science", "API"],
    projectUrl: "#",
    details: "Built with D3.js to visualize complex climate data. Animated charts and maps illustrate temperature trends and CO2 levels over decades."
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
