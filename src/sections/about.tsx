import { motion } from "framer-motion"
import { Section } from "../components/section"

export function About() {
  return (
    <Section id="about" className="bg-secondary/20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
             {/* Placeholder for Profile Image - using a gradient/solid color for now, user can replace */}
            <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary flex items-center justify-center text-4xl font-bold text-muted-foreground">
               Profile Image
            </div>
          </div>
          <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl -z-10 group-hover:bg-primary/30 transition-colors duration-500"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Motivated Junior DevOps Engineer & Backend Developer with a B.Sc. in Applied Informatics.
            Experienced in building cloud-native applications using Kubernetes, Helm, and Spring Boot.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Strong background in CI/CD automation and modern infrastructure. I enjoy solving complex
            problems and optimizing workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-xl mb-1">7+</h4>
              <p className="text-sm text-muted-foreground">Years Coding</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">10+</h4>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
