import { Title } from "components/Title/Title";
import { useState, useEffect } from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";

export const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/api/news")
      .then(data => data.json())
      .then(data => setNews([...data]))
      .catch(err => console.log(err))
  }, [])

  return (<>
  <Title>News page</Title>
  <NewsList news={news}/>
  </>
  );
};
