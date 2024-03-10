import rangeRoverSportImage from '../../assets/land_rover_range_rover_sport.jpeg';
import aston_martin from '../../assets/aston_martin_dbs.jpeg';
import hummer from '../../assets/hummer_h2.jpeg';
import navigator from '../../assets/lincoln_navigator_l.jpeg';

const AboutUs = () => {
  return (
    <section className="pt-[60px] container">
      <h2 className="text-[#1e1823] font-semibold text-xl md:text-2xl text-center leading-[1.2] md:leading-[1.16] tracking-[-0.03em] mb-[50px]">
        About Us
      </h2>

      <ul className="flex justify-center items-center flex-col gap-y-[30px] md:flex-row md:flex-wrap md:gap-x-[30px] md:gap-y-[50px]">
        <li
          className="w-[240px] h-[200px] bg-black rounded-[12px] text-white px-[10px] py-[6px]"
          style={{
            backgroundImage: `linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
                      ),
    url(${hummer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p>
            Our company has been on the market for 10 years. We guarantee
            quality for our clients. Our cars mean reliability and comfort.
          </p>
        </li>
        <li
          className="w-[240px] h-[200px] bg-black rounded-[12px] text-white px-[10px] py-[6px]  "
          style={{
            backgroundImage: `linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
                      ),
    url(${rangeRoverSportImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p>
            More than 4 thousand satisfied clients have used the services of our
            company! Our company is the right choice!
          </p>
        </li>
        <li
          className="w-[240px] h-[200px] bg-black rounded-[12px] text-white px-[10px] py-[6px]"
          style={{
            backgroundImage: `linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
                      ),
    url(${aston_martin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p>
            Travel is easy. Traveling for work, no problem. Take beautiful girls
            for a ride in a luxury car - come to us! We have a car for every
            request. Luxury, reliability and comfort - that's us!
          </p>
        </li>
        <li
          className="w-[240px] h-[200px] bg-black rounded-[12px] text-white px-[10px] py-[6px]"
          style={{
            backgroundImage: `linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
                      ),
    url(${navigator})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p>
            Our team of managers will quickly select a car to suit your taste.
            Price and quality is the slogan of our company. Fast support and
            registration of rental and insurance. We value our clients' time.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
