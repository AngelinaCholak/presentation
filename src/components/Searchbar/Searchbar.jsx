import { fetchMovie } from 'components/config';
import FilmsList from 'components/FilmsList/FilmsList';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';


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
    <div className={css.searchFilms}>
      <div className={css.search}>
        <form className={css.SearchForm} onSubmit={onFormSubmit}>
          <input
            className={css.SearchFormInput}
            type="text"
            name="searchKey"
            placeholder="Search movies"
          />

          <button className={css.SearchFormButton} type="submit">
            <FaSearch className={css.SearchFormButtonLabel} />
          </button>
        </form>
      </div>
      {spiner && <Loader />}
      <FilmsList films={films} />
    </div>
  );
}

export default Searchbar