import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import { Title } from "components/Title/Title"; 
import { NewsList } from "components/News/NewsList/NewsList";
import { Container } from "../components/Header/Header.styled"
import { Loader } from "components/Loader/Loader";


const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const BASE_URL = "http://localhost:3000/api";
    // const BASE_URL = "https://petssuport4815162342api.onrender.com/api";
    let searchPath = '/news';
      if(search) {
        searchPath = searchPath + "?search=" + search;
      };
      
      fetch(`${BASE_URL}${searchPath}`)
      .then(data => data.json())
      .then(data => setNews(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [search])


  function filterNews(e) {
    const userSearch = e.target.elements.search.value;
    setSearchParams({ search: userSearch });
  }

  function clearFiltration() {
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

