import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import { Title } from "components/Title/Title"; 
import { NewsList } from "components/News/NewsList/NewsList";
import { Container } from "../components/Header/Header.styled"
import { Loader } from "components/Loader/Loader";
// import { Loader } from "components/Loader/Loader";

// додати лоадер
// додати обробку помилок
// сортування новин по даты
// поправити нижні відступи


const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [filterParams, setFilterParams] = useState(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const BASE_URL = "http://localhost:3000/api";
    // const BASE_URL = "https://petssuport4815162342api.onrender.com/api";
    let searchPath = '/news';
      if(search) {
        searchPath = searchPath + "?search=" + search;
      };

      setIsLoading(true);

    fetch(`${BASE_URL}${searchPath}`)
      .then(data => data.json())
      .then(data => setNews(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [search])

  function filterNews(e) {
    const userSearch = e.target.elements.search.value;
    // setFilterParams(userSearch);
    setSearchParams({ search: userSearch });
    // e.target.reset();
  }

  function clearFiltration() {
    // setFilterParams("");
    setSearchParams({ });
  }

  const content = isLoading ? 
  <Loader/> : 
  <NewsList 
    news={news} 
    onSubmit={filterNews} 
    onClear={clearFiltration} />

  return (
    <Container>
      <Title>News</Title>
      {content}
    </Container>
  );
};

export default NewsPage;

