import { Section } from "../components/section"
import { Button } from "../components/ui/button"
import { Mail, MessageSquare, Send, Phone, Github, Linkedin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [resultMessage, setResultMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    setResultMessage("")
    const form = e.currentTarget

    const formData = new FormData(form)
    formData.append("access_key", "4a6f4ab2-6798-4da5-baa1-89aa6e45fa7b")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setFormState('success')
        setResultMessage("Message sent successfully!")
        form.reset()
      } else {
        setFormState('error')
        setResultMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setFormState('error')
      setResultMessage("Failed to send message. Please check your connection.")
    } finally {
        setTimeout(() => {
            if (formState === 'success') setFormState('idle') // Reset after delay if success
        }, 3000)
    }
  }

  return (
    <Section id="contact" className="py-24">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to say hello? I'd love to hear from you.
          </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
        {/* Contact Info */}
        <div className="flex flex-col justify-between">
            <div>
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-8">
                    <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                    I'm currently available for freelance projects and full-time opportunities.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:mzkariyah@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mzkariyah@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-muted-foreground">+49 17640480072</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <Github className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">GitHub</p>
                            <a href="https://github.com/mohamad4444" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">github.com/mohamad4444</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="p-3 bg-secondary rounded-full">
                            <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">LinkedIn</p>
                            <a href="https://linkedin.com/in/mohamad4444" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/mohamad4444</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <p className="text-sm text-muted-foreground">
                    Based in 66482 Zweibrücken, Germany<br/>
                    Available for freelance & full-time opportunities
                </p>
            </div>
        </div>

        {/* Contact Form */}
        <div className="bg-secondary/20 p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="subject" value="New Submission from DevPortfolio" />
                
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input 
                        required
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full h-10 px-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                        required
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full h-10 px-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                        required
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full p-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                </div>
                
                <Button type="submit" size="lg" className="w-full gap-2" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending...' : (
                        <>
                            Send Message <Send className="w-4 h-4" />
                        </>
                    )}
                </Button>
                
                {resultMessage && (
                  <p className={`text-sm text-center mt-4 ${formState === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {resultMessage}
                  </p>
                )}
            </form>
        </div>
      </div>
    </Section>
  )
}
