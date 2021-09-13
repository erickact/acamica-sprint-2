import React from 'react';
import HotelsCard from './HotelsCard';

const HotelsList = (props) => {
  const { hotels } = props;
  if (hotels.length === 0) {
    return (
      <div className="w-3/4 text-center mx-auto bg-red-200 p-4 rounded text-xl text-red-600 border border-red-600">
        🥺 Lo sentimos, ningún hotel cumple con los filtros seleccionados
      </div>
    );
  }
  return (
    <ul className="container mx-auto max-w-7xl flex flex-wrap justify-between">
      {hotels.map((hotel) => {
        return <HotelsCard hotel={hotel} key={`hotel-${hotel.name}`} />;
      })}
    </ul>
  );
};

export default HotelsList;
