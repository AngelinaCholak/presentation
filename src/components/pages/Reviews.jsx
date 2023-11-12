import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/config';
import css from 'components/index.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const getReviewsFilms = async () => {
      try {
        const fetchedReviews = await fetchReviews(movieId);

        if (!fetchedReviews || fetchedReviews.results.length === 0) {
          toast.info('Unfortunately, there are no reviews');
        } else {
          setReviews(fetchedReviews);
        }
      } catch (error) {
        toast.error(error?.message || 'Something went wrong');
      } finally {
        setSpinner(false);
      }
    };

    if (spinner) {
      getReviewsFilms();
    }
  }, [movieId, spinner]);

  if (spinner) {
    return <Loader />;
  }

  return (
    <div className={css.castContainer}>
      {reviews && reviews.results && reviews.results.length > 0 && (
        <ul className={css.list}>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
