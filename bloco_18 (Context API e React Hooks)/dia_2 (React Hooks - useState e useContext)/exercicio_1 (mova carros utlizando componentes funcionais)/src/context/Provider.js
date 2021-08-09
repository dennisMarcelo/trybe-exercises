// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';


function Provider({children }) {
  const [car, setCar] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const moveCar = (colorCar, side) => {
    setCar({ ...car, [colorCar]: side})
  }

  const context = {
    ...car,
    moveCar: moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
