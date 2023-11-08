import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/index.module.css';

const Layoyt = () => {
  return (
    <div>
      <header className={css.container}>
        <nav>
          <ul>
            <li>
              <NavLink className={css.headerLink} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
          </header>
          <main>
              <Outlet/>
          </main>
    </div>
  );
};

export default Layoyt;
