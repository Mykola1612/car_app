import { useEffect, useState } from 'react';
import Favorites from '../../components/Favorites/Favorites';
import Modal from '../../components/Modal/Modal';

const FavoritesPage = () => {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  const [cars] = useState(
    JSON.parse(localStorage.getItem('favoritesCar')) || []
  );
  const [carId, setCarId] = useState(null);
  const [car, setCar] = useState([]);

  useEffect(() => {
    const car =
      carId !== null &&
      cars.filter((elem) => {
        return elem.id === carId;
      });

    setCar(car);
  }, [cars, carId]);

  return (
    <main className="container pt-[140px] pb-[150px] main">
      <Favorites
        handelOpen={(id) => {
          setModalInfoIsOpen(true);
          setCarId(id);
        }}
      />
      <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => {
          setModalInfoIsOpen(false);
          setCar([]);
          document.body.classList.remove('overflow-hidden');
        }}
      >
        {Array.isArray(car) &&
          car.length !== 0 &&
          car.map((carModal) => {
            return (
              <div key={carModal.id}>
                <img
                  src={
                    carModal.img !== undefined
                      ? carModal.img
                      : carModal.photoLink
                  }
                  alt={carModal.description}
                  className="w-[461px] h-[248px] rounded-[14px] mb-[14px] object-cover"
                />

                <h2 className="text-[#121417] font-medium text-base leading-[150%] mb-[8px]">
                  {carModal.make}{' '}
                  {<span className="text-[#3470ff]">{carModal.model}</span>},{' '}
                  {carModal.year}
                </h2>

                <ul className="flex flex-wrap gap-x-[12px] text-xs leading-[150%] mb-[14px] w-[292px]">
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
                <p className="text-[#121417] leading-[143%] text-sm mb-[24px]">
                  {carModal.description}
                </p>
                <div>
                  <h2 className="text-[#121417] mb-[8px] text-sm font-medium leading-[143%]">
                    Accessories and functionalities:
                  </h2>
                  <ul className="flex flex-wrap gap-x-[12px] mb-[24px] text-xs leading-[150%]">
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
                  <div className="mb-[24px]">
                    <h2 className="text-[#121417] mb-[8px] text-sm font-medium leading-[143%]">
                      Rental Conditions:
                    </h2>
                    <ul className="text-[#363535] text-xs flex flex-wrap gap-[8px]">
                      <li className="h-[32px] bg-[#f9f9f9] py-[7px] px-[14px] rounded-[35px]">
                        <p>
                          Minimum age:
                          <span className="text-[#3470ff]">
                            {
                              carModal.rentalConditions
                                .split('\n')[0]
                                .split(': ')[1]
                            }
                          </span>
                        </p>
                      </li>
                      <li className="h-[32px] bg-[#f9f9f9] py-[7px] px-[14px] rounded-[35px]">
                        <p>{carModal.rentalConditions.split('\n')[1]}</p>
                      </li>
                      <li className="h-[32px] bg-[#f9f9f9] py-[7px] px-[14px] rounded-[35px]">
                        <p>{carModal.rentalConditions.split('\n')[2]}</p>
                      </li>
                      <li className="h-[32px] bg-[#f9f9f9] py-[7px] px-[14px] rounded-[35px]">
                        <p>
                          Mileage:
                          <span className="text-[#3470ff]">
                            {String(carModal.mileage).slice(0, 1) +
                              ',' +
                              String(carModal.mileage).slice(1)}
                          </span>
                        </p>
                      </li>
                      <li className="h-[32px] bg-[#f9f9f9] py-[7px] px-[14px] rounded-[35px]">
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
          className="flex justify-center items-center text-[#fff] w-[168px] h-[44px] rounded-[12px] bg-[#3470ff] focus:bg-[#0b44cd] hover:bg-[#0b44cd]  focus:outline-none  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Rental car
        </a>
      </Modal>
    </main>
  );
};

export default FavoritesPage;
