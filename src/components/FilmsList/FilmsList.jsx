import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './FilmsList.module.css';

const FilmsList = ({ films }) => {
  return (
    <div className={css.container}>
      {films.map(film => (
        <div className={css.film} key={film.id}>
          <NavLink to={`/movies/${film.id}`}>
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

export default FilmsList;
