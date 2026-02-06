import { Github, Linkedin, Terminal, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl tracking-tighter">DevPortfolio</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
                Building digital experiences with modern technologies. 
                Focused on creating accessible, performant, and beautiful web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors block py-1">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
             <h3 className="font-semibold mb-4">Connect</h3>
             <ul className="space-y-4">
                <li>
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                </li>

                <li>
                    <a href="mailto:mzkariyah@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" /> Email <ArrowUpRight className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Mohammad Mahamid. All rights reserved.</p>
            <p>Designed & Built with ❤️ using React</p>
        </div>
      </div>
    </footer>
  )
}
