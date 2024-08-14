"use client"

import Image from "next/image"

import { AspectRatio } from "./ui/aspect-ratio"

export const ArticleImage = ({
  title,
  src,
  ratio = "wide",
}: {
  title: string
  src: string
  ratio?: "wide" | "tall"
}) => {
  return (
    <AspectRatio ratio={ratio === "tall" ? 4 / 3 : 16 / 9}>
      <Image src={src} alt={title} fill className="object-cover md:rounded" />
    </AspectRatio>
  )
}
