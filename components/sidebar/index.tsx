"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Getting started": true,
    "Components": true
  });

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const sidebarData = [
    {
      title: "Getting started",
      items: ["Introduction", "Installation", "components.json", "Theming"],
    },
    {
      title: "Components",
      items: ["Accordion", "Alert", "Breadcrumb", "Button", "Card", "Checkbox"],
    },
    {
      title: "Utilities",
      items: ["Colors", "Typography", "Spacing", "Layout"],
    },
  ];

  return (
    <aside className={cn(
      "h-screen fixed top-0 pt-16 transition-all duration-300 ease-in-out overflow-y-auto",
      "bg-background border-r border-border z-40",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Collapse button */}
      <button 
        onClick={toggleCollapse}
        className={cn(
          "p-2 absolute top-2 right-2 rounded-md",
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className={cn("p-2", isCollapsed ? "px-1" : "px-3")}>
        {sidebarData.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className={cn(
                "flex items-center w-full mb-1 text-sm font-medium",
                "text-foreground hover:text-primary transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
                isCollapsed ? "justify-center p-2" : "justify-between px-2 py-1"
              )}
            >
              {!isCollapsed && (
                <span className="truncate">{section.title}</span>
              )}
              {!isCollapsed && section.items && (
                expandedSections[section.title] ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                )
              )}
              {isCollapsed && (
                <span className="sr-only">{section.title}</span>
              )}
            </button>

            {/* Expanded content */}
            {!isCollapsed && expandedSections[section.title] && section.items && (
              <ul className="space-y-1 pl-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={cn(
                        "block py-1.5 px-2 text-sm rounded",
                        "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                    >
                      <span className="truncate">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Collapsed content (icon-only) */}
            {isCollapsed && (
              <div className="flex flex-col items-center space-y-1 mt-2">
                {section.items?.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={cn(
                      "w-8 h-8 flex items-center justify-center rounded",
                      "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                    title={item}
                  >
                    {item.charAt(0)}
                    <span className="sr-only">{item}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;