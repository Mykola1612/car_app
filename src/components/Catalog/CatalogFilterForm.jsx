import Select from 'react-select';
import { getCars } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const options = [
  {
    value: 'All',
    label: 'All',
  },
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
    if (e.target.brand.value === 'All') {
      setFilterCars(cars);
      filterFn(cars, false);
      return;
    }

    const filteredCars = cars.filter(
      (car) => car.make === e.target.brand.value
    );
    if (filterCars.length === 0) {
      console.log('Not Faund');
    }
    setFilterCars(filteredCars);
    filterFn(filteredCars, true);
  };

  return (
    <section className="margin pb-[50px]">
      <form onSubmit={handelSubmit} className="flex justify-between items-end ">
        <label>
          <p className="mb-[8px] font-medium font-sm leading-[129%] text-[#8a8a89]">
            Car brand
          </p>
          <Select
            options={options}
            placeholder="Enter the text"
            classNamePrefix="custom_select"
            name="brand"
            defaultValue=""
          />
        </label>
        <button
          type="submit"
          className="w-[136px] h-[48px] bg-[#3470ff] py-[14px] px-[44px] rounded-[12px]
                 text-white font-semibold text-sm leading-[143%] font-[Manrope]
                 focus:bg-[#0b44cd] hover:bg-[#0b44cd]  focus:outline-none  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default CatalogFilterForm;
