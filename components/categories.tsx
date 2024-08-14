"use client"

import Link from "next/link"
import { Banknote, BikeIcon, CpuIcon, FlaskConical, TvIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Separator } from "./ui/separator"

const categories = [
  { label: "business", icon: Banknote },
  { label: "entertainment", icon: TvIcon },
  { label: "science", icon: FlaskConical },
  { label: "sports", icon: BikeIcon },
  { label: "technology", icon: CpuIcon },
]

export const Categories = () => {
  return (
    <NavigationMenu className="flex max-w-[100vw] items-start justify-start">
      <NavigationMenuList>
        {categories.map((category, index) => (
          <NavigationMenuItem key={category.label}>
            <Link href={`/category/${category.label}`} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-2 transition-all hover:bg-transparent hover:text-orange-800"
                )}
              >
                <div className="flex items-center justify-between gap-2 capitalize">
                  {<category.icon className="h-4 w-4" />}
                  <span className="text-sm">{category.label}</span>
                  {index !== categories.length - 1 ? (
                    <Separator
                      orientation="vertical"
                      className="ml-4 h-8 rotate-45 bg-orange-700"
                    />
                  ) : null}
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
