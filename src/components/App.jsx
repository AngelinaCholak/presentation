import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import Layoyt from './Layoyt/Layoyt';

export const App = () => {
  return (
    <div>
      <Layoyt />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
