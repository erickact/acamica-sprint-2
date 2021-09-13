import React, { useState } from 'react';

const HotelsCard = (props) => {
  const { hotel } = props;
  const {
    name,
    photo,
    description,
    availabilityFrom,
    availabilityTo,
    rooms,
    city,
    country,
    price
  } = hotel;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const initialDate = new Date(availabilityFrom);
  const finalDate = new Date(availabilityTo);

  const [isBooked, setIsBooked] = useState(false);

  return (
    <li style={{ width: '32%' }} className="shadow-lg rounded p-4 mb-6">
      <img src={photo} alt="" className="mb-3 rounded" />

      <h2 className="text-xl text-purple-600 font-bold mb-3">{name}</h2>

      <div className="rounded py-2 px-3 bg-purple-200 mb-3">
        <p>Desde: {initialDate.toLocaleDateString('es-PE', options)}</p>
        <p>Hasta: {finalDate.toLocaleDateString('es-PE', options)}</p>
      </div>

      <div className="max-h-24 overflow-y-auto mb-5">
        <p>{description}</p>
      </div>

      <div className="mb-3 shadow-md flex items-center rounded">
        <span className="text-white bg-purple-600 px-3 py-1 mr-2 rounded">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        {city}, {country}
      </div>

      <div className="mb-3 shadow-md flex items-center rounded">
        <span className="text-white bg-purple-600 px-2 py-1 mr-2 rounded">
          <i className="fas fa-bed"></i>
        </span>
        {rooms} Habitaciones{' '}
      </div>

      <div className="mb-3 shadow-md flex items-center rounded">
        <span className="text-white bg-purple-600 px-3.5 py-1 mr-2 rounded">
          <i className="fas fa-dollar-sign"></i>
        </span>
        {Array(4)
          .fill()
          .map((_, index) => {
            const spanClases = `${
              index < price ? 'text-purple-600' : 'text-purple-200'
            } font-bold`;
            return (
              <span key={`price-${index}`} className={spanClases}>
                $
              </span>
            );
          })}
      </div>

      <div>
        <button
          onClick={() => {
            setIsBooked(!isBooked);
          }}
          className={`w-full h-10 text-white rounded mt-4 ${
            isBooked ? 'bg-green-500' : 'bg-purple-600 '
          }`}
        >
          {isBooked ? 'Reservado 🎉' : 'Reservar'}
        </button>
      </div>
    </li>
  );
};

export default HotelsCard;
