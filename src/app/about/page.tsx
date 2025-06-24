"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stories = [
  {
    title: "The First Spark",
    description: "Where it all began...",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "code terminal",
    imageAlt: "Abstract representation of first code",
    layout: "imageRight",
    content: "I still remember the thrill of seeing \"Hello, World!\" appear on the screen. It wasn't just text; it was a realization that I could create something from nothing, just by writing lines of code. That moment ignited a passion for programming that continues to burn brightly.",
    popupContent: "That first 'Hello, World!' was written in Python. I was immediately captivated. It felt like unlocking a superpower. I quickly moved from simple console outputs to creating small games and scripts to automate my daily tasks. This initial spark taught me that with logic and persistence, I could build tools to solve real problems, setting me on a path of endless discovery in the world of software development."
  },
  {
    title: "The Robotics Adventure",
    description: "Bringing code to life.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "robotics workbench",
    imageAlt: "A robotics project in progress",
    layout: "imageLeft",
    content: "My journey into robotics was a game-changer. It was the perfect fusion of software and hardware, where my code could physically interact with the world. Building my first line-following robot, troubleshooting sensor issues, and celebrating its first successful run was an unforgettable experience.",
    popupContent: "The robot was built on an Arduino platform, using infrared sensors to detect a black line on a white surface. The real challenge was in the software: writing a PID control algorithm to make its movements smooth and accurate. Debugging involved hours of tweaking values and observing the robot's behavior. The moment it perfectly navigated the course was a profound lesson in the interplay between the digital and physical realms, teaching me about control systems and the importance of iterative development."
  },
  {
    title: "My Philosophy",
    description: "What drives me forward.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "whiteboard ideas",
    imageAlt: "A person thinking and planning",
    layout: "imageRight",
    content: "I believe in the power of continuous learning and creative problem-solving. Technology is a tool, and its true potential is unlocked when applied with empathy and a desire to make a positive impact. I strive to build things that are not only functional and efficient but also elegant and user-friendly.",
    popupContent: "This philosophy means I don't just ask 'Can we build it?' but 'Should we build it?' and 'Who does it serve?'. For me, a successful project isn't just one that's technically impressive; it's one that is accessible, intuitive, and genuinely helpful to its users. It's about writing clean, maintainable code so that others can build upon it, and always considering the ethical implications of technology. Every line of code is an opportunity to create something of value for someone else."
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          My Digital Journal
        </h1>
        <p className="text-lg text-muted-foreground">
          A few chapters from my story so far. Click on any card to read more.
        </p>
      </header>

      <div className="space-y-16">
        {stories.map((story, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className={cn("relative h-64 md:h-full", story.layout === 'imageRight' ? 'md:order-2' : '')}>
                    <Image
                      src={story.imageSrc}
                      alt={story.imageAlt}
                      data-ai-hint={story.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={cn("p-8 flex flex-col justify-center", story.layout === 'imageRight' ? 'md:order-1' : '')}>
                    <CardHeader>
                      <CardTitle className="font-headline text-3xl">{story.title}</CardTitle>
                      <CardDescription className="text-md">{story.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {story.content}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl p-0">
                <div className="relative w-full aspect-video">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    data-ai-hint={story.imageHint}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-3xl mb-1">{story.title}</DialogTitle>
                    <DialogDescription className="text-md text-muted-foreground">{story.description}</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {story.popupContent}
                    </p>
                  </div>
                </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
