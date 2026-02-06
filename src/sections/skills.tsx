import { motion } from "framer-motion"
import { Section } from "../components/section"
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql, SiGit, SiDocker, SiAmazon, SiLinux, SiFigma } from "react-icons/si"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact className="w-8 h-8 text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 dark:text-white text-black" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-8 h-8 text-black dark:text-white" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="w-8 h-8 dark:text-white text-black" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-[#E10098]" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: <SiGit className="w-8 h-8 text-[#F05032]" /> },
      { name: "Docker", icon: <SiDocker className="w-8 h-8 text-[#2496ED]" /> },
      { name: "AWS", icon: <SiAmazon className="w-8 h-8 text-[#FF9900]" /> },
      { name: "Linux", icon: <SiLinux className="w-8 h-8 text-black dark:text-white" /> },
      { name: "Figma", icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" /> },
    ],
  },
]

export function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I specialize in building full-stack applications with a focus on simple,
          clean, and scalable code.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-6 text-center">{group.category}</h3>
            <div className="grid grid-cols-3 gap-6">
              {group.items.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                   <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                    {skill.icon}
                   </div>
                   <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                     {skill.name}
                   </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
