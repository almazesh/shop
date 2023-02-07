


import React from 'react';
import useLocations from '../../hooks/useLocations';

const Logo = () => {
  const { actions } = useLocations();

  
  return (
    <h2 onClick={actions.goToMain}>Shop App</h2>
  )
}

export default Logo;
