import { Article } from "@/types/article"

import { ArticleDetails } from "./article-details"
import { H2 } from "./ui/typography"

export const LatestArticles = ({ articles }: { articles: Array<Article> }) => {
  return (
    <div className="flex h-full flex-col gap-4 px-4 lg:max-w-xs lg:px-0">
      <H2 className="border-none text-4xl font-bold uppercase text-orange-700">
        Latest Stories
      </H2>
      {articles.map((article) => (
        <ArticleDetails key={article.title} article={article} />
      ))}
    </div>
  )
}
