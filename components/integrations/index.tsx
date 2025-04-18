import React from "react";
import { 
 
  SiStripe, 
  SiNextdotjs,
  SiSupabase,
  SiMailgun
} from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

type IntegrationItem = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
};

const IntegrationCard = ({
  item,
  isSelected = false
}: {
  item: IntegrationItem;
  isSelected?: boolean;
}) => (
  <div
    className={`flex items-center p-4 rounded-lg gap-4 transition-colors duration-200 cursor-pointer
      ${
        isSelected 
          ? "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
      }`}
  >
    <div className="text-2xl text-gray-700 dark:text-gray-300">
      {item.icon}
    </div>
    <div className="flex flex-col items-start gap-1">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
        {item.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {item.description}
      </p>
    </div>
  </div>
);

export default function Integrations() {
  const integrations: IntegrationItem[] = [
    {
      id: "tailwind",
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: <SiStripe />
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Payments processing",
      icon: <SiStripe />
    },
    {
      id: "next-auth",
      name: "NextAuth",
      description: "Authentication solution",
      icon: <FaShieldAlt />
    },
    {
      id: "supabase",
      name: "Supabase",
      description: "Open source Firebase alternative",
      icon: <SiSupabase />
    },
    {
      id: "mailgun",
      name: "Mailgun",
      description: "Email API service",
      icon: <SiMailgun />
    },
    {
      id: "nextjs",
      name: "Next.js",
      description: "React framework",
      icon: <SiNextdotjs />
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Ship faster with{" "}
          <span className="text-white dark:text-white underline decoration-white">
            endless
          </span>{" "}
          integrations
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Connect with your favorite tools and services seamlessly
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <IntegrationCard 
            key={integration.id}
            item={integration}
          />
        ))}
      </div>
    </section>
  );
}