import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { fetchMovie } from 'components/config';
import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSearchSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const getFilms = async () => {
      try {
        setSpiner(true);
        const searchFilms = await fetchMovie(query);
        if (searchFilms.length === 0) {
          toast.error('No movies found for your query!');
        }
        setFilms(searchFilms);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    getFilms();
  }, [query]);

  return (
    <div>
      <Searchbar onSearchSubmit={onSearchSubmit} />
      <div>
        {spiner && <Loader />}
        <FilmsList films={films} />
      </div>
    </div>
  );
};

export default Movies;
