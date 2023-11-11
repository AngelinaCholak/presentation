import { fetchMovie } from 'components/config';
import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Searchbar = () => {
       const [films, setFilms] = useState([]);
       const [spiner, setSpiner] = useState(false);
       const [searchParams, setSearchParams] = useSearchParams();
       const query = searchParams.get('query');
    

      const onFormSubmit = e => {
        e.preventDefault();
        const value = e.currentTarget.elements.searchKey.value;
        setSearchParams({ query: value });
      };
     useEffect(() => {
       if (!query) {
         return;
       }
       const getFilms = async () => {
         try {
           setSpiner(true);
           const searchFilms = await fetchMovie(query);
           if (searchFilms.length === 0) {
             toast.error('No movies found for your query!');
           }
           setFilms(searchFilms);
         } catch (error) {
           toast.error(error.message);
         } finally {
           setSpiner(false);
         }
       };

       getFilms();
     }, [query]);
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <span>Search:</span>
          <input type="text" name="searchKey" />
        </label>
        <button type="submit">Search</button>
      </form>
      {spiner && <Loader />}
      <FilmsList films={films} />
    </div>
  );
}

export default Searchbar