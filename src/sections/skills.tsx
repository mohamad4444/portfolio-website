import { motion } from "framer-motion"
import { Section } from "../components/section"
import { 
  SiSpring, SiPython, SiKotlin, SiCplusplus, SiSharp, SiHaskell, 
  SiSpringboot, SiKubernetes, SiHelm, SiDocker, SiJenkins, SiAnsible, 
  SiPostgresql, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript 
} from "react-icons/si"

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <SiSpring className="w-8 h-8 text-[#6DB33F]" /> },
      { name: "Python", icon: <SiPython className="w-8 h-8 text-[#3776AB]" /> },
      { name: "Kotlin", icon: <SiKotlin className="w-8 h-8 text-[#7F52FF]" /> },
      { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-[#00599C]" /> },
      { name: "C#", icon: <SiSharp className="w-8 h-8 text-[#239120]" /> },
      { name: "Haskell", icon: <SiHaskell className="w-8 h-8 text-[#5D4F85]" /> },
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-[#6DB33F]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 text-[#326CE5]" /> },
      { name: "Helm", icon: <SiHelm className="w-8 h-8 text-[#0F1689]" /> },
      { name: "Docker", icon: <SiDocker className="w-8 h-8 text-[#2496ED]" /> },
      { name: "Jenkins", icon: <SiJenkins className="w-8 h-8 text-[#D24939]" /> },
      { name: "Ansible", icon: <SiAnsible className="w-8 h-8 text-[#EE0000]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
    ],
  },
]

export function Skills() {
  return (
    <Section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tools and technologies I use to build scalable applications.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-center"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary/80 uppercase tracking-widest md:text-right">{group.category}</h3>
            
            <div className="flex flex-wrap gap-4 p-6 rounded-2xl border bg-card/30 backdrop-blur-sm shadow-sm hover:border-primary/20 transition-colors duration-300">
                {group.items.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2 group cursor-default"
                    >
                        <div className="p-2 rounded-lg bg-transparent transition-all duration-300 filter grayscale group-hover:grayscale-0">
                            {skill.icon}
                        </div>
                        <span className="text-[10px] md:text-xs font-medium text-muted-foreground/80 group-hover:text-primary transition-colors">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
