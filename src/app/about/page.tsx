import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          My Digital Journal
        </h1>
        <p className="text-lg text-muted-foreground">
          A few chapters from my story so far.
        </p>
      </header>

      <div className="space-y-16">
        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">The First Spark</CardTitle>
                <CardDescription className="text-md">Where it all began...</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I still remember the thrill of seeing "Hello, World!" appear on the screen. It wasn't just text; it was a realization that I could create something from nothing, just by writing lines of code. That moment ignited a passion for programming that continues to burn brightly. It taught me the power of logic and the endless possibilities that technology holds.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Abstract representation of first code"
                data-ai-hint="code terminal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center md:order-2">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">The Robotics Adventure</CardTitle>
                <CardDescription className="text-md">Bringing code to life.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  My journey into robotics was a game-changer. It was the perfect fusion of software and hardware, where my code could physically interact with the world. Building my first line-following robot, troubleshooting sensor issues, and celebrating its first successful run was an unforgettable experience. It taught me persistence and the magic of seeing tangible results from digital instructions.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full md:order-1">
              <Image
                src="https://placehold.co/600x400.png"
                alt="A robotics project in progress"
                data-ai-hint="robotics workbench"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">My Philosophy</CardTitle>
                <CardDescription className="text-md">What drives me forward.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I believe in the power of continuous learning and creative problem-solving. Technology is a tool, and its true potential is unlocked when applied with empathy and a desire to make a positive impact. I strive to build things that are not only functional and efficient but also elegant and user-friendly. Every project is a new opportunity to learn, grow, and contribute.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="https://placehold.co/600x400.png"
                alt="A person thinking and planning"
                data-ai-hint="whiteboard ideas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
