import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Layoyt  from './pages/Layoyt';
import Home from "./pages/Home";
import MovieDetails  from "./pages/MovieDetails";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layoyt />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route />
        <Route />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};



