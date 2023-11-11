import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'components/config';
import css from 'components/index.module.css';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastsFilms = async () => {
      try {
        const castsDetails = await fetchCasts(movieId);
        setCasts(castsDetails);
      } catch (error) {
        console.error('Error fetching casts details:', error.message);
      } finally {
        console.log('Finally');
      }
    };

    getCastsFilms();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {casts && (
        <ul className={css.castList}>
          {casts.cast.map(actor => (
            <li key={actor.id} className={css.castItem}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className={css.castImage}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/500x750"
                  alt="Poster not available"
                  className={css.castImage}
                />
              )}
              <p className={css.castName}>{actor.name}</p>
              <p className={css.castCharacter}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
