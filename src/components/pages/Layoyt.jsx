import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/index.module.css';

const Layoyt = () => {
  return (
    <div>
      <header className={css.container}>
        <nav>
          <ul>
            <li>
              <NavLink className={css.headerLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Layoyt;
