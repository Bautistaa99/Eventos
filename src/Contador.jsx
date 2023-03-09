import React, { useState } from 'react';

const Contador = () => {
  const [cuenta, setCuenta] = useState(0);
  const buttonClickHandler = () => {
    setCuenta(cuenta + 1);
  };
  return (
    <div>
      <button onClick={buttonClickHandler}>Cuenta!</button>
      {cuenta}
    </div>
  );
};

export default Contador;
