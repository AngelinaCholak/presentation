import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';

const Searchbar = ({ onSearchSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onFormSubmit = async e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
    onSearchSubmit(value);
  };

  return (
    <div className={css.searchFilms}>
      <div className={css.search}>
        <form className={css.SearchForm} onSubmit={onFormSubmit}>
          <input
            className={css.SearchFormInput}
            type="text"
            name="searchKey"
            placeholder="Search movies"
            defaultValue={query || ''} 
          />

          <button className={css.SearchFormButton} type="submit">
            <FaSearch className={css.SearchFormButtonLabel} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
