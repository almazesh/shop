

import React from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { addBasket, addFavorite } from '../../../api/api';
import { Hooks } from '../../../hooks';
import { AiFillDelete } from "react-icons/ai";

import cls from "./ClothesCard.module.scss";
import { toast } from 'react-toastify';

export default function ClothesCard({
  base, 
  isFavorite, 
  handleDelete,
  isCart
}) {
  const { currentUser } = Hooks.useUser();
  const notifyFavorite = () => toast("Product is added to Favorite!");
  const notifyCart = () => toast("Product is added to Cart!");

  React.useEffect(() => {
    if(!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify([]))
    }
  }, [])

  const handleFavorite = (id) => {
    if(id) {
      const data = {
        product: parseInt(id)
      }
      const request = addFavorite(data)

      request
        .then(res => {
          notifyFavorite()
        })
    }
  };
 
  const handleBasket = (id) => {
    const products = JSON.parse(localStorage.getItem("products"));

    localStorage.setItem("products", JSON.stringify(
      [
        ...products,
        {
          id
        }
      ]
    ));

    const arrayID = products.map(item => item.id);

    const uniqueID = new Set(arrayID);

    const uniqueIDArray = [];

    uniqueID.forEach(item => uniqueIDArray.push(item));

    const data = {
      products: uniqueIDArray
    };

    if(data) {
      const request = addBasket(data)

      request
        .then(res => notifyCart())
    }
  };

  return (
    <div className={cls.card}>
      {
        (isFavorite) && (
          <p onClick={() => handleDelete(base?.deletedId)}>
            <AiFillDelete />
          </p>
        )
      }

      {
        (currentUser && !isFavorite && !isCart) && (
          <React.Fragment>
            <GrFavorite 
              onClick={() => handleFavorite(base?.id)} 
              className={cls.icon_left}
            />
            <AiOutlineShoppingCart 
              onClick={() => handleBasket(base?.id)} 
              className={cls.icon_right}
            />
          </React.Fragment>
        )
      }

      {
        isCart 
          ? <img src={`https://cryxxen.pythonanywhere.com${base?.image}`} alt=''/>
          : <img src={base?.image} alt=''/>
      }

      <div className={cls.card_body}>
        <h3>{base?.title}</h3>
        <p>{base?.price}$</p>
      </div>
    </div>
  )
};
