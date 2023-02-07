import React from 'react';
import Container from '../Container/Container';
import Logo from '../logo/Logo';
import cls from "./Header.module.scss";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc"
import { Hooks } from '../../hooks';


export default function Header() {
  const { actions } = Hooks.useLocations();
  const { currentUser, logOut } = Hooks.useUser();

  return (
    <header>
      <Container>
        <div className={cls.navbar}>
          <Logo />

          <div className={cls.icons}>
            {
              currentUser && (
                <React.Fragment>
                  <VscSignOut onClick={logOut}/>
                  <AiOutlineShoppingCart onClick={actions.goToCart}/>
                  <GrFavorite onClick={actions.goToFavorite}/>
                </React.Fragment>
              )
            }

            {!currentUser && <AiOutlineUser onClick={actions.goToRegister}/>}
          </div>
        </div>
      </Container>
    </header>
  )
};
