import { NewsItem } from "../NewsItem/NewsItem";
import { ArticleList } from "./NewsList.styled"

export function NewsList({news}) {
  return (<ArticleList>
      {news.map(article => <li key={article._id}> <NewsItem article={article}/> </li>)}
  </ArticleList>
  )
}