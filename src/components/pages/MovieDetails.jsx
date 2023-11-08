import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const { movieId } = useParams();
    useEffect(() => {
        if (!movieId) return;
    }, [movieId]);
    return (
        <div>MovieDetails</div>
    )
};
export default MovieDetails;
