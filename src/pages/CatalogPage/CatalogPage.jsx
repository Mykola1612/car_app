import { useDispatch, useSelector } from 'react-redux';
import CatalogCard from '../../components/Catalog/CatalogCard';
import CatalogFilterForm from '../../components/Catalog/CatalogFilterForm';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
import { fetchCar } from '../../redux/cars/cars.reducer';
import { getCars } from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);
  const [carId, setCarId] = useState(null);
  const [car, setCar] = useState([]);

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  useEffect(() => {
    const car =
      carId !== null &&
      cars.filter((elem) => {
        return elem.id === carId;
      });
    setCar(car);
  }, [cars, carId]);

  return (
    <main className="container">
      <CatalogFilterForm />
      <CatalogCard
        handelOpen={(id) => {
          setModalInfoIsOpen(true);
          setCarId(id);
        }}
      />
      <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => {
          setModalInfoIsOpen(false);
        }}
      >
        {Array.isArray(car) &&
          car.length !== 0 &&
          car.map((carModal) => {
            return (
              <>
                <img
                  src={carModal.img}
                  alt=""
                  className="w-[461px] h-[248px]"
                />
                <ul className="flex flex-wrap gap-x-[12px]">
                  <li>
                    <p>
                      {
                        carModal.address.split(',')[
                          carModal.address.split(',').length - 2
                        ]
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      {
                        carModal.address.split(',')[
                          carModal.address.split(',').length - 1
                        ]
                      }
                    </p>
                  </li>
                  <li>
                    <p>id: {carModal.id}</p>
                  </li>
                  <li>
                    <p>Year: {carModal.year}</p>
                  </li>
                  <li>
                    <p>Type: {carModal.type}</p>
                  </li>
                  <li>
                    <p>Fuel Consumption: {carModal.fuelConsumption}</p>
                  </li>
                  <li>
                    <p>Engine Size: {carModal.engineSize}</p>
                  </li>
                </ul>
                <p>{carModal.description}</p>
                <div>
                  <h2>Accessories and functionalities:</h2>
                  <ul className="flex flex-wrap gap-x-[12px]">
                    {(carModal.accessories.length !== 0 ||
                      carModal.functionalities.length !== 0) &&
                      [
                        ...carModal.accessories,
                        ...carModal.functionalities,
                      ].map((el, index) => {
                        return (
                          <li key={index}>
                            <p>{el}</p>
                          </li>
                        );
                      })}
                  </ul>
                  <div>
                    <h2>Rental Conditions:</h2>
                  </div>
                </div>
              </>
            );
          })}
        <a
          href="tel:+380730000000"
          className="flex justify-center items-center text-[#fff] w-[168px] h-[44px] rounded-[12px] bg-[#3470ff]"
        >
          Rental car
        </a>
      </Modal>
    </main>
  );
};

export default CatalogPage;
