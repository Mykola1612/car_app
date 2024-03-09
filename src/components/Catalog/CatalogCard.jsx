import sprite from '../../assets/sprite.svg';

const CatalogCard = ({ handelOpen, cars }) => {
  return (
    <section className="margin pb-[100px]">
      <ul className="flex flex-wrap gap-x-[30px] gap-y-[50px] justify-center">
        {cars.length !== 0 &&
          cars.map((car) => {
            return (
              <li
                key={car.id}
                className="flex flex-col w-[274px] min-h-[426px] justify-between"
              >
                <div>
                  <div className="relative w-[274px] mb-[14px]">
                    <img
                      src={car.img !== undefined ? car.img : car.photoLink}
                      alt=""
                      className="w-[274px] h-[268px] rounded-[14px] object-fill"
                    />
                    <svg className="absolute top-[14px] right-[14px] w-[18px] h-[18px] ">
                      <use
                        href={`${sprite}#icon-hart`}
                        className="stroke-[#fff] hover:stroke-[#3470ff]"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between mb-[8px]">
                    <h2 className="text-[#121417]">{`${car.make} ${car.model}, ${car.year}`}</h2>
                    <p className="text-[#121417]">{car.rentalPrice}</p>
                  </div>
                  <ul className="flex flex-wrap gap-x-[12px] gap-y-[4px]  text-xs leading-[150%] ">
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
                  className="w-[274px] h-[44px] bg-[#3470ff] rounded-[12px] text-white "
                >
                  Learn more
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default CatalogCard;
