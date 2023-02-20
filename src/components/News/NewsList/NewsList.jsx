import { useEffect, useState } from "react";

import { NewsItem } from "../NewsItem/NewsItem";
import { ArticleList } from "./NewsList.styled";
import { NewsForm } from "../NewsForm/NewsForm";
// import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';


export function NewsList({news, onSubmit}) {
  // const [articles, setArticles] = useState([...news]);
  
  // useEffect(() => {

  // }, [])

  
  // function filterNews(filterparams) {
  //   filterNews(filterparams)
  //   // const filtred = news.filter(article => article.description.includes(filterparams))
  //   // console.log(filtred);
  // }
  
  if (!news) {return null};
  return (<>
      {/* <NoticesSearch/> */}
      <NewsForm onSubmit={onSubmit}/>
      <ArticleList>
          {news.map(article => <li key={article._id}> 
            <NewsItem article={article}/> 
          </li>)}
      </ArticleList>
    </>
  )
}