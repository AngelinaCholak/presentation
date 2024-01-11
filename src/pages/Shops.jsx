import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Vortex } from 'react-loader-spinner';
import css from './Shops.module.css';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';
import image6 from './img/img6.jpg';
import image7 from './img/img7.jpg';
import image8 from './img/img8.jpg';
import image9 from './img/img9.jpg';
import image10 from './img/img10.jpg';
import image11 from './img/img11.jpg';
import image12 from './img/img12.jpg';
import image13 from './img/img13.jpg';
import image14 from './img/img14.jpg';
import image15 from './img/img15.jpg';
import image16 from './img/img16.jpg';
import image17 from './img/img17.jpg';

const PrevArrow = ({ onClick }) => (
  <div className={css.prevArrow} onClick={onClick}>
    &lt;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={css.nextArrow} onClick={onClick}>
    &gt;
  </div>
);

export const Shops = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

  useEffect(() => {
    const loadImage = () => {
      const imagePromises = images.map(image => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve();
        });
      });

      Promise.all(imagePromises).then(() => {
        setLoading(false);
      });
    };

    loadImage();
  }, [images]);

  return (
    <div className={css.container}>
      <h2></h2>
      <div className={css.sliderContainer}>
        <div className={css.sliderContainerInner}>
          {loading ? (
            <div className={css.loaderContainer}>
              <Vortex
                visible={true}
                height={80}
                width={80}
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />
            </div>
          ) : (
            <Slider {...settings} className={css.slider}>
              {images.map((image, index) => (
                <div key={index} className={css.sliderItem}>
                  <img
                    className={css.sliderImage}
                    src={image}
                    alt={`Chehol ${index}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      {/* <p>Current slide: {currentSlide + 1}</p> */}
    </div>
  );
};
