
import React from 'react';
import { deleteFavorite, getFavorite } from '../../../api/api';
import ClothesCard from '../../../components/clothes/clothesCard/ClothesCard';
import Container from '../../../components/Container/Container';
import Loader from '../../../components/Loader/Loader';
import { Hooks } from '../../../hooks';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cls from "./Favorite.module.scss";

export default function Favorite() {
  const { product } = Hooks.useLayout();
  const [favoriteProduct , setFavorite] = React.useState(null);
  const {currentUser} = Hooks.useUser();  
  const notify = () => toast("Product is deleted!");
  const [renderer, setRenderer] = React.useState("");

  React.useEffect(() => {
    const request = getFavorite();

    request
      .then(res => {
        setFavorite(res.data);
        setRenderer("recover!")
      })
  }, [renderer])

  const favorites = [];

  product?.forEach(element => {
    favoriteProduct?.forEach(item => {
      if(element.id === item.product) {
        favorites.push({
          ...element,
          deletedId: item.id
        })
      }
    });
  });

  const handleDeleteFavorite = (id) => {
    console.log(id)
    if(id) {
      const request = deleteFavorite(parseInt(id));
      setRenderer("Success recover!")

      request 
        .then(() => {
          notify();
          setRenderer("Success delete!")
        })
    }
  };

  return (
    <Container>
      <div className={cls.favorite_point}>
        <h2>My Favorites</h2>

        <div className={cls.favorite_inline}>
          {(favorites?.length === 0 && currentUser ) && <p>You dont have favorite products!</p>}

          {currentUser === undefined && <p>You are not authorized!</p>}

          {!favoriteProduct && <Loader />}

          {favorites?.map(item => 
            <ClothesCard 
              handleDelete={handleDeleteFavorite} 
              isFavorite={true} 
              key={item.id} 
              base={item}
            />
          )}
        </div>
      </div>

    </Container>
  )
}
