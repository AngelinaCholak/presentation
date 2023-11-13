import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCasts } from 'components/config';
import css from 'components/index.module.css';
import svg from './photo_5947527676661185603_x.jpg';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const getCastsFilms = async () => {
      try {
        setSpinner(true);
        const castsDetails = await fetchCasts(movieId);
        if (castsDetails.cast.length === 0 && castsDetails.crew.length === 0) {
          toast.info('Unfortunately, there is no cast information available.');
        } else {
          setCasts(castsDetails);
        }
      } catch (error) {
        toast.error(error?.message || 'Something went wrong');
      } finally {
        setSpinner(false);
      }
    };
    getCastsFilms();

  }, [movieId]);

  if (spinner) {
    return <Loader />;
  }

  return (
    <div className={css.castContainer}>
      {casts && (
        <ul className={css.castList}>
          {casts.cast.map(actor => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : svg
                }
                alt={actor.name}
                className={css.castImage}
              />
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
