import { useState, useEffect } from "react";
import { Title } from "components/Title/Title"; 
import { NewsList } from "components/News/NewsList/NewsList";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then(data => data.json())
      .then(data => setNews(data))
      .catch(error => console.log(error))
  }, [news])

  return (
    <>
    <Title>News</Title>
    <NewsList news={news}/>
    </>
  );
};

export default NewsPage;
