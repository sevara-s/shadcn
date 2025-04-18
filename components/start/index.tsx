import React from "react";
import {
  IoColorPaletteOutline,
  IoPhonePortraitOutline,
  IoExtensionPuzzleOutline,
  IoOptionsOutline,
  IoAccessibilityOutline,
  IoGlobeOutline,
  IoRocketOutline,
} from "react-icons/io5";

export default function Start() {
  const features = [
    {
      icon: <IoPhonePortraitOutline className="text-blue-500" />,
      title: "Responsive Design",
      description:
        "Create stunning websites that adapt seamlessly to different screen sizes and devices.",
    },
    {
      icon: <IoExtensionPuzzleOutline className="text-blue-500" />,
      title: "Extensive Component Library",
      description:
        "Choose from a vast collection of pre-built components to accelerate your development.",
    },
    {
      icon: <IoColorPaletteOutline className="text-blue-500" />,
      title: "Customizable Styles",
      description:
        "Easily customize the look and feel with our flexible styling options.",
    },
    {
      icon: <IoAccessibilityOutline className="text-blue-500" />,
      title: "Accessibility Ready",
      description:
        "Ensure your application is accessible to all users regardless of abilities.",
    },
    {
      icon: <IoGlobeOutline className="text-blue-500" />,
      title: "Cross-Browser Compatibility",
      description: "Works flawlessly across all major browsers and devices.",
    },
    {
      icon: <IoRocketOutline className="text-blue-500" />,
      title: "Optimized Performance",
      description: "Fast-loading experiences with performance-optimized code.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          12+ Starter Pages & Examples
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Kick-start your projects with our wide range of examples, using
          pre-built UI parts, custom components and layouts using Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
