import { NavLink } from 'react-router-dom';
import rangeRoverSportImage from '../../assets/land_rover_range_rover_sport.jpeg';

const Hero = () => {
  return (
    <section className="h-[800px] flex justify-center items-center ">
      <div
        className="absolute inset-0 z-[-1] "
        style={{
          backgroundImage: `url(${rangeRoverSportImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div>
        <h1 className="text-[#fff]">
          The best site for renting cars in Ukraine
        </h1>
        <NavLink to="/catalog">Rent now</NavLink>
      </div>
    </section>
  );
};

export default Hero;
