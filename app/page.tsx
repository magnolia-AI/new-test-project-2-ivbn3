import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import Video from "@/components/video";
import { Camera, Code2, Mountain, Smartphone, ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Video 
            src="/videos/pixverse_l0ED031zHe.mp4" 
            className="w-full h-full object-cover rounded-none"
            autoplay
            loop
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90" />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
            Frontend Developer & Adventure Photographer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Building Digital Interfaces. <br />
            Capturing Mountain <span className="text-primary italic">Motion.</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-lg text-white/80 mb-8 md:text-xl">
             Merging functional code with visual storytelling. Based in the Alps, shipping globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
              Photo Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Dual Edge</h2>
            <p className="text-muted-foreground max-w-2xl">
              I specialize in high-performance web development and professional-grade outdoor visual content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Frontend Engineering</CardTitle>
                <CardDescription>
                  Pixel-perfect interfaces using Next.js, TypeScript, and Framer Motion.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <Camera className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Action Photography</CardTitle>
                <CardDescription>
                  Specializing in extreme sports, backcountry skiing, and commercial outdoor gear.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-4" />
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Conversion-focused design systems for the modern web and mobile apps.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-24">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">Recent work across design and photography.</p>
            </div>
            <Button variant="ghost" className="group">
              View All Work <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group space-y-4">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted border">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Summit OS – Dashboard</h3>
                  <p className="text-muted-foreground">React / Tailwind / ChartJS</p>
                </div>
                <Badge variant="outline">Web App</Badge>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group space-y-4">
              <div className="aspect-video overflow-hidden rounded-xl bg-muted border">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551846230-019623e18f2d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Alpine Motion 2024</h3>
                  <p className="text-muted-foreground">Commercial Photography Series</p>
                </div>
                <Badge variant="outline">Photography</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Code in the morning. <br />Powder in the afternoon.</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Based in Verbier, Switzerland, I help brands build high-end digital products while capturing the raw energy of the mountains. I believe that being close to nature fuels better creativity and more resilient engineering.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:opacity-70 transition-opacity"><Github className="h-6 w-6" /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity"><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 transform rotate-3">
                <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1456948927036-ad533e53865c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start a Project</h2>
            <p className="text-muted-foreground">
              Interested in working together? Drop a line for freelance inquiries or photography bookings.
            </p>
          </div>
          <div className="p-8 rounded-2xl border bg-card shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span className="text-foreground font-bold">ALPINE DEV</span>
          </div>
          <p>© 2026 Crafted by a Front-end Ski Bum.</p>
          <div className="flex gap-8">
            <Link href="#work" className="hover:text-primary">Work</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}



