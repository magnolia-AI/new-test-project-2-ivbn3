'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Mountain } from 'lucide-react'
import Link from 'next/link'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px] border-r-primary/10">
        <div className="flex items-center gap-2 mb-8">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">ALPINE DEV</span>
        </div>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-4 rounded-full" onClick={() => setOpen(false)}>
            Book Now
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 

