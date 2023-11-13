import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import Layoyt from './Layoyt/Layoyt';
import { TostBox } from './Toast/Toast';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <TostBox />
        <Routes>
          <Route path="/" element={<Layoyt />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" index element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
