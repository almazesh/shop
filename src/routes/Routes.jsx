
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import Header from '../components/header/Header';
import AuthRoutes from '../pages/AuthRoutes/AuthRoutes';
import LayoutRoutes from '../pages/LayoutRoutes/LayoutRoutes';
import { mainPath } from '../service/path';

export default function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={mainPath.layout + "*"} element={<LayoutRoutes />}/>
        <Route path={mainPath.auth + "*"} element={<AuthRoutes />}/>
      </Switch>
      <Footer />
    </div>
  )
};
