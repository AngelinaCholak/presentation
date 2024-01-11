import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TostBox } from './Toast/Toast';
import 'react-toastify/dist/ReactToastify.css';
import Layoyt from './Layoyt/Layoyt';
import { Home } from 'pages/Home';
import { Shops } from 'pages/Shops';
import Development from 'pages/Presentation';
import { Contacts } from 'pages/Contacts';

export const App = () => {
  return (
    <div>
      <TostBox />
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<Home />} />
          <Route path="/development" element={<Development />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
