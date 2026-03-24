import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, FlaskConical, GraduationCap, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const educationHistory = [
  {
    degree: "M.S. in Computer Science",
    university: "Stanford University",
    universityUrl: "https://www.stanford.edu/",
    years: "2022-2024",
    description: "Specialization in Artificial Intelligence. Thesis on generative models for code synthesis.",
  },
  {
    degree: "B.S. in Software Engineering",
    university: "University of Waterloo",
    universityUrl: "https://uwaterloo.ca/",
    years: "2018-2022",
    description: "Graduated with Distinction, Dean's List. Co-op experience at major tech companies.",
  },
  {
    degree: "High School Diploma",
    university: "St. Xavier's High School",
    universityUrl: "#",
    years: "2014-2018",
    description: "Valedictorian, President of the Robotics Club. Focused on advanced mathematics and physics.",
  },
  {
    degree: "Professional Certificate in Data Science",
    university: "Harvard University (Online)",
    universityUrl: "https://pll.harvard.edu/subject/data-science",
    years: "2021",
    description: "Comprehensive program covering data visualization, probability, inference, and modeling.",
  },
];

const publications = [
  {
    title: "Generative Models for Code Synthesis and Autocompletion",
    conference: "Proceedings of the 45th International Conference on Software Engineering (ICSE 2024)",
    authorsAndSummary: "Yash N., et al. - This paper introduces a novel approach to code generation using a fine-tuned large language model, significantly improving accuracy in context-aware autocompletion tasks.",
  },
  {
    title: "Low-Latency Real-Time Communication with WebSockets",
    conference: "The Web Conference 2023 (WWW '23)",
    authorsAndSummary: "Yash N., et al. - An exploration of architectural patterns for minimizing latency in collaborative web applications, presenting a case study on a real-time whiteboard.",
  },
];

const researchInterests = [
  "Large Language Models (LLMs) and their application in software engineering.",
  "Generative AI for creative content and code generation.",
  "Efficient algorithms for big data processing and analysis.",
  "Human-computer interaction, especially in the context of developer tools.",
  "The ethics and societal impact of artificial intelligence.",
];


export default function AcademicPage() {
  const mainEducation = educationHistory.slice(0, 2);
  const additionalEducation = educationHistory.slice(2);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Academic Journey
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A summary of my educational background, research interests, and publications.
        </p>
      </header>

      <div className="space-y-12">
        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20 group">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Education</CardTitle>
                <CardDescription>My formal learning path.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-6 pl-8 border-l-2 border-primary ml-10 pb-10">
              <div className="space-y-8">
                {mainEducation.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                    <p className="text-muted-foreground">
                      <Link href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group/link hover:underline hover:text-primary transition-colors">
                        {edu.university}
                        <span className="inline-block w-0 group-hover/link:w-5 transition-[width] duration-300 ease-in-out overflow-hidden">
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </span>
                      </Link>
                      , {edu.years}
                    </p>
                    <p className="mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>

              {additionalEducation.length > 0 && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="additional-edu" className="border-none">
                    <AccordionTrigger 
                      className={cn(
                        "absolute -left-[1px] bottom-0 translate-x-[-50%] translate-y-[50%]",
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background p-0",
                        "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        "hover:no-underline hover:bg-primary/10 focus:outline-none",
                        "[&[data-state=open]>svg]:rotate-180 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary"
                      )}
                    >
                      <span className="sr-only">Toggle additional education</span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-8 pt-8 pb-2">
                      {additionalEducation.map((edu, index) => (
                        <div key={index}>
                          <h3 className="font-bold text-xl">{edu.degree}</h3>
                          <p className="text-muted-foreground">
                            <Link href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group/link hover:underline hover:text-primary transition-colors">
                              {edu.university}
                              <span className="inline-block w-0 group-hover/link:w-5 transition-[width] duration-300 ease-in-out overflow-hidden">
                                <ExternalLink className="h-4 w-4 ml-1" />
                              </span>
                            </Link>
                            , {edu.years}
                          </p>
                          <p className="mt-1">{edu.description}</p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
          </CardContent>
        </Card>

        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardHeader>
             <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Publications</CardTitle>
                <CardDescription>Contributions to the field.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {publications.length > 0 ? (
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div className="pl-4" key={index}>
                    <h4 className="font-semibold text-lg">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground">{pub.conference}</p>
                    <p className="mt-2">{pub.authorsAndSummary}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground italic py-4">
                <p>Working on some new papers. Check back soon!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardHeader>
             <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Research Interests</CardTitle>
                <CardDescription>Areas I'm passionate about exploring.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              {researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
