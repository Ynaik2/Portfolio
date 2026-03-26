
import ProjectCard from "@/components/project-card";
import projectsData from "@/user_data/projects.json";

const { projects } = projectsData;

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
