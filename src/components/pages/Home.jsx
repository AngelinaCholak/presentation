import { fetchTrending } from 'components/config';
import FilmsList from 'components/FilmsList/FilmsList';
import React, { useEffect, useState } from 'react';
import css from 'components/index.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
const Home = () => {
  const [films, setFilms] = useState([]);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
        setSpiner(true);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <div className={css.bodyFilms}>
      <h1 className={css.titleTrending}>Trending today</h1>
      {spiner && <Loader />}
      {films.length !== 0 && <FilmsList films={films} />}
    </div>
  );
};

export default Home;
