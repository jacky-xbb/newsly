import { Article } from "@/types/article"
import { Category } from "@/types/category"

export const fetchHeadlines = async ({
  category,
}: {
  category?: Category
}): Promise<Array<Article>> => { 
    const url = `${process.env.NEWS_API_URL}/top-headlines?apiKey=${ process.env.NEWS_API_KEY }&sources=bbc-news${category ? `&category=${category}` : ""}`
    const request = await fetch(url)
    const articles = (await request.json()) as { articles: Array<Article> }

    const resp =  articles?.articles?.filter(({ title, urlToImage }) => title !== "[Removed]" && urlToImage) || []

    return (
        resp
    )
}