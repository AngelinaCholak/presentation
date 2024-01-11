import React from 'react'
import css from './Contacts.module.css';
import image1 from './img/slide4.png';
export const Contacts = () => {
  return (
    <div className={css.container}>
      <img className={css.img} src={image1} alt="img" />
    </div>
  );
}
