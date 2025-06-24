import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, FlaskConical, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AcademicPage() {
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
        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20">
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
          <CardContent className="space-y-4 pl-8 border-l-2 border-primary ml-10">
              <div>
                <h3 className="font-bold text-xl">M.S. in Computer Science</h3>
                <p className="text-muted-foreground">
                  <Link href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group hover:underline hover:text-primary transition-colors">
                    Stanford University
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  , 2022-2024
                </p>
                <p className="mt-1">Specialization in Artificial Intelligence. Thesis on generative models for code synthesis.</p>
              </div>
               <div>
                <h3 className="font-bold text-xl">B.S. in Software Engineering</h3>
                <p className="text-muted-foreground">
                   <Link href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group hover:underline hover:text-primary transition-colors">
                    University of Waterloo
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  , 2018-2022
                </p>
                <p className="mt-1">Graduated with Distinction, Dean's List. Co-op experience at major tech companies.</p>
              </div>
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
          <CardContent className="space-y-6">
            <div className="pl-4">
              <h4 className="font-semibold text-lg">"Generative Code Synthesis: A New Frontier"</h4>
              <p className="text-sm text-muted-foreground">Conference on Neural Information Processing Systems (NeurIPS), 2023</p>
              <p className="mt-2">Yash, et al. - This paper explores novel transformer architectures for generating syntactically correct and semantically meaningful code.</p>
            </div>
             <div className="pl-4">
              <h4 className="font-semibold text-lg">"Efficient Indexing for Large-Scale Code Repositories"</h4>
              <p className="text-sm text-muted-foreground">ACM SIGMOD Conference on Management of Data, 2022</p>
              <p className="mt-2">Yash, et al. - We propose a new data structure that significantly speeds up semantic search in codebases exceeding billions of lines.</p>
            </div>
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
              <li>Large Language Models (LLMs) and their application in software engineering.</li>
              <li>Generative AI for creative content and code generation.</li>
              <li>Efficient algorithms for big data processing and analysis.</li>
              <li>Human-computer interaction, especially in the context of developer tools.</li>
              <li>The ethics and societal impact of artificial intelligence.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
