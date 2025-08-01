"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  projectUrl: string;
  details: string;
};

export default function ProjectCard({ title, description, imageUrl, imageHint, tags, projectUrl, details }: ProjectCardProps) {
  return (
    <Dialog>
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
          <DialogTrigger asChild>
            <Button className="w-full" variant="outline">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-headline text-3xl mb-2">{title}</DialogTitle>
           <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
        </DialogHeader>
        <div>
            <div className="relative w-full aspect-[3/2]">
                <Image
                    src={imageUrl}
                    alt={title}
                    data-ai-hint={imageHint}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{details}</p>
                <Button asChild>
                    <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                        View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
