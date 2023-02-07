

import React from 'react';
import { Hooks } from '../../hooks';
import Loader from '../Loader/Loader';

import cls from "./Clothes.module.scss";
import ClothesCard from './clothesCard/ClothesCard';

export default function Clothes() {
  const { product } = Hooks.useLayout();

  return (
    <div className={cls.clothes_inline}>
      {product?.length === 0 && <p>Empty</p>}

      {!product && <Loader />}

      {product?.map(item => 
        <ClothesCard 
          isFavorite={false} 
          key={item.id} 
          base={item}/>
        )}
    </div>
  )
}
