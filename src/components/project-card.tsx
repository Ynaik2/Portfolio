import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  projectUrl: string;
};

export default function ProjectCard({ title, description, imageUrl, imageHint, tags, projectUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={imageHint}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={projectUrl}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
