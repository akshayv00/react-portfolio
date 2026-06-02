import { ArrowRight, ExternalLink, GitBranch } from "lucide-react"

const projects=[
    {
        id:1,
        title:'Airline Reservation System',
        desc:'Designed and implemented a real-time Airline Reservation ticket booking platform offering a seamless booking experience. Proficient in HTML, CSS, and JavaScript.',
        // image:'/projects/image1',
        tags:['HTML' , 'CSS', 'JavaScript'],
        demoUrl:'#',
        githubUrl:'#'
    },
    {
        id:2,
        title:'iWeather (Website and Application)',
        desc:'Developed a weather application displaying current temperature, humidity, minimum and maximum temperatures, sunset and sunrise times, and rainfall chances for specified locations. Utilized HTML, CSS, JavaScript, and Android Studio for development.',
        // image:'/projects/image1',
        tags:['HTML' , 'CSS', 'JavaScript'],
        demoUrl:'#',
        githubUrl:'#'   
    },
    {
        id:3,
        title:'Rock Papers Scissors Game',
        desc:'Developed a one-on-one interactive gaming website with the computer as the opponent, using HTML and CSS',
        // image:'/projects/image1',
        tags:['HTML' , 'CSS'],
        demoUrl:'#',
        githubUrl:'#'   
    },
    {
        id:4,
        title:'Parking Space Locator IoT Based Project',
        desc:'Developed an IoT-based parking space locator using sensors to monitor and report parking space availability. Utilized Arduino Uno and C programming for implementation',
        // image:'/projects/image1',
        tags:['Arduino Uno', 'C programming'],
        demoUrl:'#',
        githubUrl:'#' 

    },
    {
        id:5,
        title:'Talking Tails - A Community Service',
        desc:'Created a community website tailored to user needs and convenience, incorporating a QR code feature for mobile menu display. Developed with HTML, CSS, and JavaScript',
        // image:'/projects/image1',
        tags:['HTML' , 'CSS', 'JavaScript'],
        demoUrl:'#',
        githubUrl:'#' 

    }
]

export const Projects = () =>{
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project was crafted with attention
                to details, user experience and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        {/* <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div> */}

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                        <p className="text-muted-foreground text-sm mb-4">
                            {project.desc}
                        </p>

                        {/* <div className="flex justify-between items-center">
                            <div className="flex space-3">
                                <a href={project.demoUrl} className="text-forground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} className="text-forground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <GitBranch size={20}/>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com"
                >
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>
        </div>

    </section>
)
}