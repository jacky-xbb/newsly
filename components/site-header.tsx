"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Categories } from "./categories"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { H1 } from "./ui/typography"

export function SiteHeader() {
  return (
    <header className="flex w-full flex-col items-center justify-between gap-4 px-8 pb-4 pt-8 md:flex-row md:border-b">
      <H1 className="uppercase text-orange-700 lg:text-6xl">
        <Link href="/">{siteConfig.name}.</Link>
      </H1>
      <ScrollArea className="whitespace-nowrap">
        <Categories />
        <ScrollBar orientation="horizontal" className="md:hidden" />
      </ScrollArea>
    </header>
  )
}
