import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/config';
import css from 'components/index.module.css';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const getReviewsFilms = async () => {
      try {
        setSpiner(true);
        const reviews = await fetchReviews(movieId);
          if (reviews.length === 0) {
            toast.info('Unfortunately there are no reviews');
          }
        setReviews(reviews);
      } catch (error) {
          toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    getReviewsFilms();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {spiner && <Loader />}
      {reviews && reviews.results ? (
        <ul className={css.list}>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
