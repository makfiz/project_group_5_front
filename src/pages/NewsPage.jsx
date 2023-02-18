import { useState, useEffect } from "react";
import { Title } from "components/Title/Title"; 
import { NewsList } from "components/News/NewsList/NewsList";
import { Container } from "../components/Header/Header.styled"

// додати лоадер
// коли пустий лист
// додати обробку помилок
// додати пошук по тексту новин
// *додати пошук по тайтлу
// сортування новин по даты
// поремонтувати довжину тексту

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then(data => {
        setIsLoading(true);
        data.json();
      })
      .then(data => {
        setIsLoading(false);
        setNews(data);
      })
      .catch(error => setError(error))
  }, [news])

  return (
    <Container>
      <Title>News</Title>
      <NewsList news={news}/>
    </Container>
  );
};

export default NewsPage;
