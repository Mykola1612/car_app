import { useDispatch, useSelector } from 'react-redux';
import CatalogCard from '../../components/Catalog/CatalogCard';
import CatalogFilterForm from '../../components/Catalog/CatalogFilterForm';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
import { fetchCar } from '../../redux/cars/cars.reducer';
import {
  getCars,
  getCarsIsLoading,
  getTotalItems,
} from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const totalItems = useSelector(getTotalItems);
  const carsIsLoading = useSelector(getCarsIsLoading);

  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);
  const [allCars, setAllCars] = useState([]);
  const [carId, setCarId] = useState(null);
  const [car, setCar] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCar({ page: page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    setAllCars(cars);
  }, [cars]);

  useEffect(() => {
    const car =
      carId !== null &&
      allCars.filter((elem) => {
        return elem.id === carId;
      });

    setCar(car);
  }, [allCars, carId]);

  const handelSubmitFilterBrand = (carsFilterArray) => {
    setAllCars(carsFilterArray);
  };

  return (
    <main className="container">
      <CatalogFilterForm filterFn={handelSubmitFilterBrand} />
      <CatalogCard
        handelOpen={(id) => {
          setModalInfoIsOpen(true);
          setCarId(id);
        }}
        cars={allCars}
      />
      <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => {
          setModalInfoIsOpen(false);
          setCar([]);
        }}
      >
        {Array.isArray(car) &&
          car.length !== 0 &&
          car.map((carModal) => {
            return (
              <div key={carModal.id}>
                <img
                  src={carModal.img}
                  alt=""
                  className="w-[461px] h-[248px] rounded-[14px] mb-[14px]"
                />

                <h2 className="text-[#121417]">{`${carModal.make} ${carModal.model}, ${carModal.year}`}</h2>

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
                    <p>
                      Type:
                      {carModal.type.charAt(0).toUpperCase() +
                        carModal.type.slice(1).toLowerCase()}
                    </p>
                  </li>
                  <li>
                    <p>Fuel Consumption: {carModal.fuelConsumption}</p>
                  </li>
                  <li>
                    <p>Engine Size: {carModal.engineSize}</p>
                  </li>
                </ul>
                <p className="text-[#121417]">{carModal.description}</p>
                <div>
                  <h2 className="text-[#121417]">
                    Accessories and functionalities:
                  </h2>
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
                    <h2 className="text-[#121417]">Rental Conditions:</h2>
                    <ul className="text-[#363535]">
                      <li>
                        <p>
                          Mileage:
                          <span className="text-[#3470ff]">
                            {String(carModal.mileage).slice(0, 1) +
                              ',' +
                              String(carModal.mileage).slice(1)}
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Price:
                          <span className="text-[#3470ff]">
                            {carModal.rentalPrice}
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        <a
          href="tel:+380730000000"
          className="flex justify-center items-center text-[#fff] w-[168px] h-[44px] rounded-[12px] bg-[#3470ff]"
        >
          Rental car
        </a>
      </Modal>
      {!totalItems && (
        <section className="margin pb-[150px] ">
          <button
            type="button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className="block text-[#3470ff] underline w-[80px] mx-auto "
          >
            {carsIsLoading ? 'Loading....' : 'Load more'}
          </button>
        </section>
      )}
    </main>
  );
};

export default CatalogPage;
