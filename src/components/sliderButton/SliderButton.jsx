


import React from 'react';

import cls from "./SliderButton.module.scss";
import classnames  from "classnames";

import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

export default function SliderButton({direct, handleClick}) {
  return (
    <button 
      className={classnames(cls.slider_button, cls[direct])}
      onClick={handleClick}
    >
      {
        direct === "left"
          ? <MdArrowBackIosNew />
          : <MdArrowForwardIos />
      }
    </button>
  )
};



