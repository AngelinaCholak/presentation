import { fetchTrending } from 'components/config';
import FilmsList from 'components/FilmsList/FilmsList';
import React, { useEffect, useState } from 'react';
import css from 'components/index.module.css';
const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.error('Error fetching trending films:', error);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <div>
      <h1 className={css.titleTrending}>Trending today</h1>
      <FilmsList films={films} />
    </div>
  );
};

export default Home;
