
import { TostBox } from 'components/Toast/Toast';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layoyt.module.css';

const Layoyt = () => {
  return (
    <div className={css.filmsTrending}>
      <header className={css.container}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <TostBox />
    </div>
  );
};

export default Layoyt;
