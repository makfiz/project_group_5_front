import { NewsItem } from "../NewsItem/NewsItem";
import { ArticleList } from "./NewsList.styled";
import { NewsForm } from "../NewsForm/NewsForm";


export function NewsList({news, onSubmit}) {
  
  if (!news) {return null};
  return (<>
      <NewsForm onSubmit={onSubmit}/>
      <ArticleList>
          {news.map(article => <li key={article._id}> 
            <NewsItem article={article}/> 
          </li>)}
      </ArticleList>
    </>
  )
}