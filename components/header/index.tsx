"use client"
import React from "react";
import { Menu, X, Github, Twitter, FileText, Box, Palette, Copy, Blocks, Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Docs", icon: <FileText className="h-4 w-4" /> },
    { label: "Components", icon: <Box className="h-4 w-4" /> },
    { label: "Themes", icon: <Palette className="h-4 w-4" /> },
    { label: "Examples", icon: <Copy className="h-4 w-4" /> },
    { label: "Blocks", icon: <Blocks className="h-4 w-4" /> },
    { label: "GitHub", icon: <Github className="h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Box className="h-6 w-6" />
            <span className="text-lg font-semibold">Shadcn UI Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <span className="hidden lg:inline">{item.label}</span>
                <span className="lg:hidden">{item.icon}</span>
              </Button>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Twitter className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;