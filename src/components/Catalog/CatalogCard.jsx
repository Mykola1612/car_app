import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCar } from '../../redux/cars/cars.reducer';

const CatalogCard = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);
  console.log(cars.length);

  return (
    <div className="container">
      <ul>
        {cars.length !== 0 &&
          cars.map((car) => {
            return (
              <li key={car.id}>
                <img src={car.img} alt="" className="w-[280px]" />
                <h2>{`make model, year`}</h2>
                <p>price</p>
                <ul>
                  <li className="city">
                    <p></p>
                  </li>
                  <li className="country">
                    <p></p>
                  </li>
                  <li className="rentalCompany">
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CatalogCard;
