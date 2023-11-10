// Cast.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'components/config';

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
    <div>
      <h1>Cast</h1>
      {casts && casts.cast ? (
        <ul>
          {casts.cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Cast;
