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
                CH mobile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/development"
              >
                Development
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/shops"
              >
                Our Shops
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${css.active} ${css.contacts}`
                    : `${css.headerLink} ${css.contacts}`
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layoyt;
