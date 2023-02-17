import { NewsItem } from "../NewsItem/NewsItem"

export function NewsList({news}) {
  return (<ul>
      {news.map(article => <li key={article._id}> <NewsItem article={article}/> </li>)}
  </ul>
  )
}