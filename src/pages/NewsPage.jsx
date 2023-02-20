import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import { Title } from "components/Title/Title"; 
import { NewsList } from "components/News/NewsList/NewsList";
import { Container } from "../components/Header/Header.styled"
// import { Loader } from "components/Loader/Loader";

// додати лоадер
// додати обробку помилок
// сортування новин по даты
// поправити нижні відступи


const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterParams, setFilterParams] = useState("");

  useEffect(() => {
    const BASE_URL = "http://localhost:3000/api";
    // const BASE_URL = "https://petssuport4815162342api.onrender.com/api";
    let searchPath = '/news';
      if(filterParams) {
        searchPath = searchPath + "?search=" + filterParams;
      };
      console.log("filterParams", filterParams);
    fetch(`${BASE_URL}${searchPath}`)
      .then(data => data.json())
      .then(data => setNews(data))
      .catch(error => setError(error))
  }, [filterParams])

  function filterNews(e) {
    console.log("Now i'm going to send a reqest to filter data", e.target.elements.search.value);
    setFilterParams(e.target.elements.search.value);
    setSearchParams({ search: e.target.elements.search.value });
  }

  return (
    <Container>
      <Title>News</Title>
      <NewsList news={news} onSubmit={filterNews} />
    </Container>
  );
};

export default NewsPage;

