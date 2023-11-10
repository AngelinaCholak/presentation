import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/config';
import css from 'components/index.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsFilms = async () => {
      try {
        const reviewsDetails = await fetchReviews(movieId);
        setReviews(reviewsDetails);
      } catch (error) {
        console.error('Error fetching reviews details:', error.message);
      } finally {
        console.log('Finally');
      }
    };

    getReviewsFilms();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
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
