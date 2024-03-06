import Select from 'react-select';

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

const CatalogFilterForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <label>
          <p>Car brand</p>
          <Select
            options={options}
            placeholder="Enter the text"
            classNamePrefix="searchSelect"
            defaultValue=""
          />
        </label>
        <label>
          <p>Price/ 1 hour</p>
          <Select
            options={options}
            classNamePrefix="searchSelect"
            defaultValue=""
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CatalogFilterForm;
