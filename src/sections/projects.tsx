import { motion } from "framer-motion"
import { Section } from "../components/section"
import { Button } from "../components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with Next.js, Stripe, and Prisma. Features include auth, cart, and dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    links: { demo: "#", code: "#" },
    strengths: ["Performance", "Scalability", "Security"],
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool for teams. Drag and drop kanban board with live updates using Socket.io.",
    tags: ["React", "Node.js", "Socket.io", "Tailwind"],
    links: { demo: "#", code: "#" },
    strengths: ["Real-time", "UX-Focused", "Responsive"],
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard powered by AI. Visualizes data trends and predicts future metrics using machine learning models.",
    tags: ["Python", "FastAPI", "React", "D3.js"],
    links: { demo: "#", code: "#" },
    strengths: ["Data Viz", "Machine Learning", "Optimization"],
  }
]

export function Projects() {
  return (
    <Section id="projects" className="bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my passion for building
          complex web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-xl overflow-hidden border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="aspect-video bg-muted relative overflow-hidden shrink-0">
               {/* Placeholder for Project Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-tr from-primary/10 to-primary/5 group-hover:scale-105 transition-transform duration-500">
                <span className="text-muted-foreground font-medium">Project Preview</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {/* Strengths Highlights */}
              <div className="flex gap-2 mb-4">
                 {project.strengths.map((strength) => (
                    <div key={strength} className="flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        {strength}
                    </div>
                 ))}
              </div>

              <p className="text-muted-foreground mb-6 line-clamp-3 text-sm grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={project.links.code} aria-label={`View code for ${project.title}`}>
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="w-full gap-2" asChild>
                  <a href={project.links.demo} aria-label={`View demo for ${project.title}`}>
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
