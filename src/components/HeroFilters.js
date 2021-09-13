import React from 'react';

const now = new Date();
const zerofy = (str) => `0${str}`.slice(-2);
const today = `${now.getFullYear()}-${zerofy(now.getMonth() + 1)}-${zerofy(
  now.getDate()
)}`;

const HeroFilters = (props) => {
  const { filters, setFilters, resetFilters } = props;
  const { country, price, rooms, availabilityFrom, availabilityTo } = filters;

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    const newFilters = Object.assign({}, filters);
    newFilters[name] = value;

    setFilters(newFilters);
  };

  const availabilityFromDate = new Date(availabilityFrom);
  const availabilityFromStr = `${availabilityFromDate.getFullYear()}-${zerofy(
    availabilityFromDate.getMonth() + 1
  )}-${zerofy(availabilityFromDate.getDate() + 1)}`;

  return (
    <div className="bg-purple-400 h-72 mb-10 flex items-center ">
      <div className="container mx-auto p-4 rounded bg-white flex items-end justify-between max-w-6xl">
        <div>
          <label
            htmlFor="availabilityFrom"
            className="block uppercase text-xs font-bold text-purple-400 mb-1"
          >
            Desde:
          </label>
          <input
            value={availabilityFrom}
            id="availabilityFrom"
            type="date"
            min={today}
            name="availabilityFrom"
            onChange={handleChange}
            className="border border-purple-400 h-10 rounded px-3"
          />
        </div>

        <div>
          <label
            htmlFor="availabilityTo"
            className="block uppercase text-xs font-bold text-purple-400 mb-1"
          >
            Hasta:
          </label>
          <input
            value={availabilityTo}
            id="availabilityFrom"
            type="date"
            min={availabilityFromStr}
            name="availabilityTo"
            onChange={handleChange}
            className="border border-purple-400 h-10 rounded px-3"
          />
        </div>

        <div>
          <label className="block uppercase text-xs font-bold text-purple-400 mb-1">
            País:
          </label>
          <select
            value={country}
            name="country"
            id=""
            className="border border-purple-400 h-10 rounded px-3"
            onChange={handleChange}
          >
            <option value="">Cualquier pais</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </div>

        <div>
          <label className="block uppercase text-xs font-bold text-purple-400 mb-1">
            Precio:
          </label>
          <select
            value={price}
            name="price"
            id=""
            className="border border-purple-400 h-10 rounded px-3"
            onChange={handleChange}
          >
            <option value="">Cualquier precio</option>
            <option value="1">Económico</option>
            <option value="2">Confort</option>
            <option value="3">Lujos</option>
            <option value="4">Magnífico</option>
          </select>
        </div>

        <div>
          <label className="block uppercase text-xs font-bold text-purple-400 mb-1">
            Nº Habitaciones:
          </label>
          <select
            value={rooms}
            name="rooms"
            id=""
            className="border border-purple-400 h-10 rounded px-3"
            onChange={handleChange}
          >
            <option value="">Cualquier tamaño</option>
            <option value="small">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="large">Grande</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => {
              resetFilters();
            }}
            className="bg-red-300 h-10 rounded px-3"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroFilters;
