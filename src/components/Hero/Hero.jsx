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
      <div className="container max-w-[500px] h-[300px] bg-[rgb(0,0,0,0.4)] flex flex-col justify-center items-center ">
        <h1 className="text-white text-[40px] text-center mb-[20px]">
          The best site for renting cars in Ukraine
        </h1>
        <NavLink
          to="/catalog"
          className="block w-[140px] mx-auto text-white text-[24px] text-center px-[10px] py-[4px] bg-black rounded-[12px] hover:text-black hover:bg-white  transition ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
        >
          Rent now
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;