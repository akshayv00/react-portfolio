import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { HomeSection } from "../components/HomeSection"
import { NavBar } from "../components/NavBar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home=()=>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <NavBar/>
        <main>
            <HomeSection/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
        <Footer/>
    </div>
    )
}