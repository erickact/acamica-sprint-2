import React, { useState } from 'react';
import HeroFilters from './components/HeroFilters';
import HotelsList from './components/HotelsList';
import { hotelsData } from './data';
import Header from './components/Header';

const initialFilters = {
  country: '',
  price: '',
  rooms: '',
  availabilityFrom: '',
  availabilityTo: ''
};
const App = () => {
  const [filters, setFilters] = useState(initialFilters);

  const filteredHotels = hotelsData
    .filter((hotel) => {
      return hotel.country === filters.country || filters.country === '';
    })
    .filter((hotel) => {
      return hotel.price.toString() === filters.price || filters.price === '';
    })
    .filter((hotel) => {
      if (filters.rooms === 'small') {
        return hotel.rooms <= 10;
      } else if (filters.rooms === 'medium') {
        return hotel.rooms > 10 && hotel.rooms < 20;
      } else if (filters.rooms === 'large') {
        return hotel.rooms >= 20;
      } else {
        return true;
      }
    })
    .filter((hotel) => {
      if (filters.availabilityFrom === '' || filters.availabilityTo === '') {
        return true;
      }

      const availabilityFrom = new Date(
        filters.availabilityFrom + 'T00:00:00'
      ).valueOf();
      const availabilityTo = new Date(
        filters.availabilityTo + 'T23:59:59'
      ).valueOf();

      return (
        hotel.availabilityFrom <= availabilityFrom &&
        hotel.availabilityTo >= availabilityTo
      );
    });

    const resetFilters = () => {
      setFilters(initialFilters)
    }

  return (
    <div>
      <Header filters={filters}/>
      <HeroFilters filters={filters} setFilters={setFilters} resetFilters={resetFilters}/>
      <HotelsList hotels={filteredHotels} />
    </div>
  );
};

export default App;
