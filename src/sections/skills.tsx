import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "../components/section"
import { cn } from "../lib/utils"
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
  const [activeTab, setActiveTab] = useState(skills[0].category)

  return (
    <Section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tools and technologies I use to build scalable applications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skills.map((group) => (
                <button
                    key={group.category}
                    onClick={() => setActiveTab(group.category)}
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                        activeTab === group.category
                            ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                            : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    )}
                >
                    {group.category}
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
                {skills.map((group) => (
                    group.category === activeTab && (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                        >
                            {group.items.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex flex-col items-center gap-3 p-4 rounded-xl border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="p-3 rounded-lg bg-secondary/50 group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="font-medium text-sm text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
