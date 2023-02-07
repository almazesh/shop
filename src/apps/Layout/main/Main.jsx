


import React from 'react';
import Clothes from '../../../components/clothes/Clothes';
import Container from '../../../components/Container/Container';
import Slider from '../../../components/slider/Slider';

import cls from "./Main.module.scss";

export default function Main() {
  return (
    <React.Fragment>
      <Slider />

      <Container>
        <div className={cls.main_clothes}>
          <h2>Our Products</h2>
          <Clothes />
          <div className={cls.main_clothes_button}>
            <button>More Clothes</button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
};
