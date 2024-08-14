import { Article } from "@/types/article"

import { ArticleDetails } from "./article-details"
import { ArticleImage } from "./article-image"

export const ArticlePreview = ({ article }: { article: Article }) => (
  <div className="flex gap-4">
    <div className="relative w-full rounded">
      {article?.urlToImage ? (
        <ArticleImage src={article.urlToImage} title={article.title} />
      ) : null}
    </div>
    <div className="max-w-sm">
      <ArticleDetails article={article} />
    </div>
  </div>
)
