import Select from 'react-select';
import { getCars } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const options = [
  {
    value: 'Buick',
    label: 'Buick',
  },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  {
    value: 'Subaru',
    label: 'Subaru',
  },
  {
    value: 'Mitsubishi',
    label: 'Mitsubishi',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Lincoln',
    label: 'Lincoln',
  },
  {
    value: 'GMC',
    label: 'GMC',
  },
  {
    value: 'Hyundai',
    label: 'Hyundai',
  },
  {
    value: 'MINI',
    label: 'MINI',
  },
  {
    value: 'Bentley',
    label: 'Bentley',
  },
  {
    value: 'Mercedes-Benz',
    label: 'Mercedes-Benz',
  },
  {
    value: 'Aston Martin',
    label: 'Aston Martin',
  },
  {
    value: 'Pontiac',
    label: 'Pontiac',
  },
  {
    value: 'Lamborghini',
    label: 'Lamborghini',
  },
  {
    value: 'Audi',
    label: 'Audi',
  },
  {
    value: 'BMW',
    label: 'BMW',
  },
  {
    value: 'Chevrolet',
    label: 'Chevrolet',
  },
  {
    value: 'Chrysler',
    label: 'Chrysler',
  },
  {
    value: 'Kia',
    label: 'Kia',
  },
  {
    value: 'Land',
    label: 'Land',
  },
];

const CatalogFilterForm = ({ filterFn }) => {
  const cars = useSelector(getCars);
  const [filterCars, setFilterCars] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!e.target.brand.value) {
      console.log('ngjkngnjkgd');
      return;
    }
    const filteredCars = cars.filter(
      (car) => car.make === e.target.brand.value
    );
    if (filterCars.length === 0) {
      return console.log('Not Faund');
    }
    setFilterCars(filteredCars);
    filterFn(filteredCars);
  };

  return (
    <div className="margin">
      <form onSubmit={handelSubmit}>
        <label>
          <p>Car brand</p>
          <Select
            options={options}
            placeholder="Enter the text"
            classNamePrefix="searchSelect"
            name="brand"
            defaultValue=""
          />
        </label>
        <button
          type="submit"
          className="w-[136px] h-[48px] rounded-[12px] bg-[#3470ff] text-[#fff]"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default CatalogFilterForm;
