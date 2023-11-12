import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './FilmsList.module.css';

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
            {film.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
            ) : (
              <img
                src="/absolute/path/to/your/components/svg/photo_5947527676661185603_x.jpg"
                alt={`Poster not available for ${film.title}`}
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
