import React from 'react';

const prices = {
  1: 'Económico',
  2: 'Confort',
  3: 'Lujos',
  4: 'Magnífico'
};

const sizes = {
  small: 'Pequeño',
  medium: 'Mediano',
  large: 'Grande'
};

const Header = (props) => {
  const { filters } = props;
  const { country, price, rooms, availabilityFrom, availabilityTo } = filters;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const initialDate = new Date(availabilityFrom + 'T00:00:00');
  const finalDate = new Date(availabilityTo + 'T00:00:00');

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <h1
        className="text-8xl mb-4 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Hoteles
      </h1>

      <p>
        {!availabilityFrom.length
          ? null
          : `Desde ${initialDate.toLocaleDateString('es-PE', options)}`}
      </p>

      <p>
        {!availabilityTo.length
          ? null
          : `Hasta ${finalDate.toLocaleDateString('es-PE', options)}`}
      </p>

      <p>{!country.length ? null : `País seleccionado: ${country}`}</p>

      <p>{!price.length ? null : `Precio seleccionado: ${prices[price]}`}</p>

      <p>
        {!rooms.length
          ? null
          : `Tamaño de habitación seleccionada: ${sizes[rooms]}`}
      </p>
    </div>
  );
};

export default Header;
