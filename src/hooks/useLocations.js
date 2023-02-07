



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { path } from '../service/path';

export default function useLocations() {
  const navigate = useNavigate();

  const goToMain = React.useCallback(() => navigate("/") , [navigate]);
  const goToRegister = React.useCallback(() => navigate("/auth/register") , [navigate]);
  const goToLogin = React.useCallback(() => navigate("/auth/login") , [navigate]);
  const goToFavorite = React.useCallback(() => navigate(path.favorite) , [navigate]);
  const goToCart = React.useCallback(() => navigate(path.cart), [navigate])

  return {
    actions: {
      goToMain,
      goToRegister,
      goToLogin,
      goToFavorite,
      goToCart
    }
  }
};
