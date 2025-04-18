"use client";
import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrComponent = () => {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">(
    "preview"
  );
  const [activePackageManager, setActivePackageManager] = React.useState<
    "npm" | "pnpm" | "yarn"
  >("npm");
  const [copied, setCopied] = React.useState(false);

  const installationCommands = {
    npm: "npx shadcn-ui@latest add breadcrumb",
    pnpm: "pnpm dlx shadcn-ui@latest add breadcrumb",
    yarn: "yarn shadcn-ui@latest add breadcrumb",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(installationCommands[activePackageManager]);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full p-6 max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mt-[80px] mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-primary">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components" className="hover:text-primary">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium">Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Component Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Breadcrumb</h1>
        <p className="text-muted-foreground">
          Displays the path to the current page in a hierarchical structure.
        </p>
      </div>

      {/* Preview/Code Tabs */}
      <div className="mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "code"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Code
          </button>
        </div>

        {/* Preview/Code Content */}
        <div className="border rounded-b-lg p-6 bg-background">
          {activeTab === "preview" ? (
            <div className="flex justify-center p-10 bg-muted/50 rounded">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ) : (
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                {`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => {
                  navigator.clipboard.writeText(`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`);
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Installation Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Installation</h2>

        {/* Package Manager Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActivePackageManager("npm")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activePackageManager === "npm"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            npm
          </button>
          <button
            onClick={() => setActivePackageManager("pnpm")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activePackageManager === "pnpm"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            pnpm
          </button>
          <button
            onClick={() => setActivePackageManager("yarn")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activePackageManager === "yarn"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            yarn
          </button>
        </div>

        {/* Installation Command */}
        <div className="relative">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            {installationCommands[activePackageManager]}
          </pre>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrComponent;
