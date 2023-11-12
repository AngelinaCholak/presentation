import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './FilmsList.module.css';
import svg from './photo_5947527676661185603_x.jpg';

const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {films.map(film => (
        <div className={css.film} key={film.id}>
          <NavLink
            className={css.navLink}
            state={{ from: location }}
            to={`/movies/${film.id}`}
          >
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : svg
              }
              alt={film.title}
            />
            <h3>{film.title}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default FilmsList;
