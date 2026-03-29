"use client";

import Image from "next/image";
import { SmartLink } from "./smart-link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <SmartLink href="/" className="flex items-center space-x-2">
          <Image 
            src="/Assets/logo.png" 
            alt="Lumina" 
            width={140} 
            height={42} 
            className="h-10 w-auto object-contain"
            priority
          />
        </SmartLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium text-[15px] tracking-wide transition-all"
            >
              {link.label}
            </SmartLink>
          ))}
          <SmartLink
            href="/contatti"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md text-[15px] font-medium transition-all shadow-sm hover:shadow"
          >
            Prenota un consulto
          </SmartLink>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<button className="p-2 text-foreground focus:outline-none" aria-label="Menu" />}
            >
              <Menu className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu di Navigazione</SheetTitle>
              <div className="flex flex-col gap-6 mt-16 px-2">
                {navLinks.map((link) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    className="text-xl font-medium text-foreground hover:text-primary border-b border-border/50 pb-4 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </SmartLink>
                ))}
                <SmartLink
                  href="/contatti"
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-md text-lg text-center font-medium mt-4 shadow-sm"
                >
                  Prenota un consulto
                </SmartLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
