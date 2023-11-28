import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function Swipers() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      }
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src={require('../../../../assets/BlackFriday.png')}/></div>
        <div className="swiper-slide"><img src={require('../../../../assets/SpecialPrice.png')}/></div>
        <div className="swiper-slide"><img src={require('../../../../assets/CuteSale.png')}/></div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Swipers;

