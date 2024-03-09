import { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';

const Favorites = ({ handelOpen }) => {
  const [favoritesCars, setFavoritesCars] = useState(
    JSON.parse(localStorage.getItem('favoritesCar')) || []
  );

  useEffect(() => {
    localStorage.setItem('favoritesCar', JSON.stringify(favoritesCars));
  }, [favoritesCars]);

  return favoritesCars.length !== 0 ? (
    <ul className="flex flex-wrap gap-x-[30px] gap-y-[50px] justify-center">
      {favoritesCars.length !== 0 &&
        favoritesCars.map((car) => {
          return (
            <li
              key={car.id}
              className="flex flex-col w-[274px] min-h-[426px] justify-between"
            >
              <div>
                <div className="relative w-[274px] mb-[14px]">
                  <img
                    src={car.img !== undefined ? car.img : car.photoLink}
                    alt={car.description}
                    className="w-[274px] h-[268px] rounded-[14px] object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const isCarFavorite =
                        favoritesCars.findIndex((el) => el.id === car.id) !==
                        -1;

                      if (!isCarFavorite) {
                        setFavoritesCars((prev) => [...prev, car]);
                      } else {
                        const updatedFavoritesCars = favoritesCars.filter(
                          (el) => el.id !== car.id
                        );
                        setFavoritesCars(updatedFavoritesCars);
                      }
                    }}
                    className="absolute top-[14px] right-[14px] group  focus:outline-none"
                  >
                    <svg
                      className={`w-[18px] h-[18px]  ${
                        favoritesCars.length !== 0 &&
                        favoritesCars.some((el) => el.id === car.id)
                          ? 'stroke-[#3470ff] fill-[#3470ff] group-hover:stroke-[#0b44cd] group-focus:stroke-[#0b44cd] group-hover:fill-[#0b44cd] group-focus:fill-[#0b44cd] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  group-focus:outline-none'
                          : 'stroke-[#fff] fill-none group-hover:stroke-[#3470ff] group-focus:stroke-[#3470ff] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]'
                      }   `}
                    >
                      <use href={`${sprite}#icon-hart`} />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between mb-[8px]">
                  <h2 className="text-[#121417] font-medium text-base leading-[150%] ">
                    {car.make}{' '}
                    {<span className="text-[#3470ff]">{car.model}</span>},{' '}
                    {car.year}
                  </h2>
                  <p className="text-[#121417]  font-medium text-base leading-[150%]">
                    {car.rentalPrice}
                  </p>
                </div>
                <ul className="listAfterElements flex flex-wrap gap-x-[12px] gap-y-[4px]  text-xs leading-[150%] ">
                  <li className="city">
                    <p>
                      {
                        car.address.split(',')[
                          car.address.split(',').length - 2
                        ]
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      {
                        car.address.split(',')[
                          car.address.split(',').length - 1
                        ]
                      }
                    </p>
                  </li>
                  <li>
                    <p>{car.rentalCompany}</p>
                  </li>
                  <li>
                    <p>
                      {car.type.charAt(0).toUpperCase() +
                        car.type.slice(1).toLowerCase()}
                    </p>
                  </li>
                  <li>
                    <p>{car.model}</p>
                  </li>
                  <li>
                    <p>{car.id}</p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handelOpen(car.id)}
                className="w-[274px] h-[44px] bg-[#3470ff] py-[12px] px-[99px] rounded-[12px]
                 text-white font-semibold text-sm leading-[143%] font-[Manrope]
                 focus:bg-[#0b44cd] hover:bg-[#0b44cd]  focus:outline-none  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
              >
                Learn more
              </button>
            </li>
          );
        })}
    </ul>
  ) : (
    <div className="">
      <p className="text-2xl text-[#121417] text-center">
        There are no favorite cars yet
      </p>
    </div>
  );
};

export default Favorites;
