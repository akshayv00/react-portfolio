import { ArrowDown } from "lucide-react"

export const HomeSection = ()=>{
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font:bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Akshay</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> V</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Results-driven software developer with expertise in web technologies including HTML,
                        CSS, JavaScript, Angular, and Node.js. Strong foundation in software development, testing,
                        and responsive design, complemented by problem-solving skills and the ability to work
                        effectively in collaborative environments. Passionate about creating scalable and efficient
                        applications while continuously enhancing technical skills
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Works
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>

            </div>
        </section>
    )
}