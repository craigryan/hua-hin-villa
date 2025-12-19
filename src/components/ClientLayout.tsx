"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import ThaiRoofIcon from "@/components/ThaiRoofIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface Messages {
  Navigation?: {
    houseName?: string;
    houseTagline?: string;
  };
}

interface ClientLayoutProps {
  messages: Messages;
}

export default function ClientLayout({ messages }: ClientLayoutProps) {
  const pathname = usePathname();

  // Check if current page is one of the footer pages that open in new tabs
  const isFooterPage =
    pathname &&
    (pathname.includes("/rental-requirements") ||
      pathname.includes("/terms-and-conditions") ||
      pathname.includes("/contact-us") ||
      pathname.includes("/social-media"));

  return (
    <header className="relative bg-white border-b border-neutral-200">
      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="flex justify-between items-center p-4">
          {!isFooterPage && <Navigation />}
          {isFooterPage && <div className="w-10" />}
          <ThaiRoofIcon className="w-10 h-10 text-primary" />
          <LanguageSwitcher />
        </div>
        <div className="text-center pb-4 px-4">
          <h1 className="text-xl font-light tracking-wider text-neutral-800">
            {messages.Navigation?.houseName || "Baan Lom Yen"}
          </h1>
          <p className="text-xs text-neutral-500 mt-1 tracking-wide">
            {messages.Navigation?.houseTagline || "Private Holiday Villa"}
          </p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:grid grid-cols-3 items-center p-6">
        <div className="justify-self-start">
          {!isFooterPage && <Navigation />}
        </div>
        <div className="justify-self-center text-center">
          <ThaiRoofIcon className="w-12 h-12 text-primary mx-auto mb-2" />
          <h1 className="text-2xl md:text-3xl font-light tracking-wider text-neutral-800">
            {messages.Navigation?.houseName || "Baan Lom Yen"}
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1 tracking-wide">
            {messages.Navigation?.houseTagline || "Private Holiday Villa"}
          </p>
        </div>
        <div className="justify-self-end">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
