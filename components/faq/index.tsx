import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function Faq() {
    return (
      <Accordion type="single" collapsible className="w-[90%] mx-auto py-12">
        <h2 className="text-center text-3xl font-bold py-10">FAQ</h2>
        
        <AccordionItem value="affiliation">
          <AccordionTrigger>
            Does Shadcn UI Pro Affliated with Shadcn or Shadcn/ui?
          </AccordionTrigger>
          <AccordionContent>
            No. Shadcn UI Pro is a professional template that integrates many SaaS
            services and can quickly build entrepreneurial projects.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="definition">
          <AccordionTrigger>What is Shadcn UI Pro?</AccordionTrigger>
          <AccordionContent>
            Shadcn UI Pro is a premium UI framework designed for modern web
            development projects.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="features">
          <AccordionTrigger>
            What are the key features of Shadcn UI Pro?
          </AccordionTrigger>
          <AccordionContent>
            Shadcn UI Pro offers a responsive design, an extensive component
            library, customizable styles, accessibility support, cross-browser
            compatibility, optimized performance, and developer-friendly code.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="responsiveness">
          <AccordionTrigger>
            Can Shadcn UI Pro be used for different screen sizes and devices?
          </AccordionTrigger>
          <AccordionContent>
            Yes, Shadcn UI Pro is designed to create websites that adapt
            seamlessly to various screen sizes and devices.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="customization">
          <AccordionTrigger>
            Is it easy to customize the styles of Shadcn UI Pro?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Shadcn UI Pro provides flexible styling options, allowing
            you to easily customize the appearance of your application.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }