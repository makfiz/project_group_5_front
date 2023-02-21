import { NewsItem } from "../NewsItem/NewsItem";
import { ArticleList } from "./NewsList.styled";
import { NewsForm } from "../NewsForm/NewsForm";


export function NewsList({news, onSubmit, onClear}) {
  
  if (!news) {return null};

  return (<>
      <NewsForm onSubmit={onSubmit} onClear={onClear}/>
      <ArticleList>
          {news.map(article => <li key={article._id}> 
            <NewsItem article={article}/> 
          </li>)}
      </ArticleList>
    </>
  )
}