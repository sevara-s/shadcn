import React from "react";
import { AreaSh } from "./areaSh";
import { BarSh } from "./barSh";
import { CalendarSh } from "./calendar";
import { CardSh } from "./card";
import { CommandSh } from "./command";
import { DataSh } from "./dataSh";
import { TabsSh } from "./tabs";

const Examples = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          700+ <br className="md:hidden" /> Tailwind CSS{" "}
          <span className="text-gray-700 dark:text-gray-300">Components</span>
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-gray-600 dark:text-gray-400">
          Based on the Tailwind CSS utility classes, Preline UI's prebuilt
          components and UI elements help you quickly design and customize
          responsive mobile-first websites
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-1">
          <AreaSh />
        </div>
        <div className="col-span-1">
          <BarSh />
        </div>
        <div className="col-span-1">
          <CalendarSh />
        </div>
        <div className="col-span-1">
          <TabsSh />
        </div>

        <div className="sm:col-span-2">
          <CommandSh />
        </div>
        <div className="sm:col-span-2">
          <DataSh />
        </div>

        <div className="sm:col-span-1">
          <CardSh />
        </div>
      </div>
    </section>
  );
};

export default Examples;