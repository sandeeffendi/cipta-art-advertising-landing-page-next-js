"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LuCircleCheckBig } from "react-icons/lu";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function messageSent() {
  return (
    <>
      <header>
        <nav className="fixed z-20 w-full px-2">
          <div
            className={
              "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12"
            }
          >
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Button className="bg-transparent hover:bg-transparent border-none shadow-none cursor-pointer flex items-center space-x-2">
                  <Logo />
                </Button>

                <button
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-10 lg:pt-10">
          <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <LuCircleCheckBig className="h-12 w-12 sm:h-16 sm:w-16 text-slate-900 dark:text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 dark:text-white">
              Message Sent
            </h1>
            <p className="text-sm sm:text-base text-slate-700-300 mb-6 sm:mb-8">
              Terima kasih. Tim penjualan kami akan segera menghubungi untuk
              membantu kebutuhan bisnis mu.
            </p>

            <div className="flex flex-row justify-center">
              <Link
                href="/#contact"
                className="mx-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
              >
                <span className="text-sm font-medium">
                  Send Another Message
                </span>
              </Link>
              <Link
                href="/"
                className="text-sm font-medium mx-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all bg-gray-200 text-black shadow-xs hover:bg-primary/90 hover:text-primary-foreground h-9 px-4 py-2"
              >
                <span>Kembali ke homepage</span>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
