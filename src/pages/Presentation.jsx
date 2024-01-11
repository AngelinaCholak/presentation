import React from 'react';
import css from './Presentation.module.css';
import image1 from './img/slide3.png';

const Development = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Development</h1>
      <h2>Today, we work with such small and large companies as:</h2>
      <p>
        • Novus (UA) <br />• Megamarket (UA) <br />• Ultramarket (UA) <br />•
        Respublika Park (UA) <br />• Gorodok Shopping Center (UA) <br />• Tochka
        Shopping Center (UA) <br />• Ocean Plaza (UA) <br />• Silpo (UA) <br />•
        Al Futtaim Dubai Festival City Mall (AEO) <br />• Dubai Festival Plaza
        (AEO)
      </p>
      <img className={css.img} src={image1} alt="img" />
    </div>
  );
};

export default Development;
