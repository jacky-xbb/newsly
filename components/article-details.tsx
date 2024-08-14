import dayjs from "dayjs"

import { Article } from "@/types/article"

import { Large, Muted, Small } from "./ui/typography"

export const ArticleDetails = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col gap-2 border-b pb-4 last-of-type:border-none">
      <Small className="text-orange-700">
        {article.author || "No Author"} |{" "}
        {dayjs(article.publishedAt).format("HH:mm")}
      </Small>
      <Large className="font-bold hover:text-orange-700 md:text-lg">
        {article.title}
      </Large>
      <Muted className="hidden md:block">{article.description}</Muted>
    </div>
  )
}
