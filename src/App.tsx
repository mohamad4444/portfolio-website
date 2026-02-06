import { ThemeProvider } from "./components/theme-provider"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { Hero } from "./sections/hero"
import { About } from "./sections/about"
import { Skills } from "./sections/skills"
import { Projects } from "./sections/projects"
import { Contact } from "./sections/contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

