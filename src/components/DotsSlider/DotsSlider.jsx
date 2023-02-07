

import React from 'react';

import cls from "./DotsSlider.module.scss";

import classnames  from "classnames";


export default function DotsSlider({currentSlider, dotsIndex}) {
  return (
    <div className={
      currentSlider === dotsIndex + 1
        ? classnames(cls.dotsSlider, cls.activeDots)
        : cls.dotsSlider
    } />
  )
}
