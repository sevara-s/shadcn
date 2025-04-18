"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { BsLightningCharge } from "react-icons/bs";
import { GrClearOption } from "react-icons/gr";
import Image from "next/image";
import showcase from "../../public/imgs/showcase.png";

export default function Showcase() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 items-center">
      {/* Left Section */}
      <section className="w-full lg:w-1/2 p-4 sm:p-8 lg:p-12 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">
          Shadcn UI Pro Ship your startup rapidly
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Elegant, Simple, and Powerful NextJS boilerplate with all you need to
          build your SaaS.
        </p>

        {/* Color Picker */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-3">
            {["gray", "red", "blue", "green", "orange"].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full ${
                  color === "gray"
                    ? "bg-gray-500"
                    : color === "red"
                    ? "bg-red-500"
                    : color === "blue"
                    ? "border-2 border-blue-400 flex items-center justify-center"
                    : color === "green"
                    ? "bg-green-500"
                    : "bg-orange-500"
                }`}
              >
                {color === "blue" && (
                  <Check className="w-4 h-4 text-blue-400" />
                )}
              </button>
            ))}
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <GrClearOption />
            Customize
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-gray-900"
          >
            <BsLightningCharge />
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-gray-700"
          >
            $ git clone shadcn-ui-pro
          </Button>
        </div>
      </section>

      {/* Right Section - Image */}
      <section className="w-full lg:w-1/2">
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={showcase}
            alt="Shadcn UI Pro showcase"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            priority
            quality={90}
          />
        </div>
      </section>
    </main>
  );
}
