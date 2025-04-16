"use client"
import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderLink {
  name: string;
  href?: string;
}

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const links: HeaderLink[] = [
    { name: "Docs" },
    { name: "Components" },
    { name: "Blocks" },
    { name: "Charts" },
    { name: "Themes" },
    { name: "Colors" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      border-b border-border
      h-16
    `}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Desktop Nav */}
          <div className="flex items-center gap-6 h-full">
            <div className="flex items-center">
              <Image 
                src="/imgs/Link.png" 
                alt="Logo" 
                width={32}
                height={32}
                className="rounded-md"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 h-full">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors h-full flex items-center border-b-2 border-transparent hover:border-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground/70 hover:bg-accent hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Outside container so it can overlay content */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-background shadow-lg border-b border-border animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col px-4 py-2">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="px-3 py-3 text-sm font-medium text-foreground/70 hover:bg-accent hover:text-foreground rounded-md transition-colors border-b border-border/10 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;