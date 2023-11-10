import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { fetchSearchedFilms } from 'components/config';
import css from 'components/FilmsList/FilmsList.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedFilms, setSearchedFilms] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const queryValue = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  
  };

  useEffect(() => {
    const getSearchedFilms = async () => {
      try {
        setIsLoading(true);
        const filmsSearch = await fetchSearchedFilms(queryValue);
        setSearchedFilms(filmsSearch);
      } catch (error) {
        console.error('Error fetching searched films:', error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
        console.log('Finally');
      }
    };

    if (queryValue) {
      getSearchedFilms();
    } else {
      setSearchedFilms(null);
    }
  }, [queryValue]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <span>Search:</span>
          <input type="text" name="searchKey" />
        </label>
        <button type="submit">Search</button>
      </form>

      {searchedFilms &&
        searchedFilms.map(film => (
          <div className={`${css.container} ${css.film}`} key={film.id}>
            <NavLink className={css.navLink} to={`/movies/${film.id}`}>
              {film.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              )}
              <h3>{film.title}</h3>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Movies;
