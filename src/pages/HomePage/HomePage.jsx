import AboutUs from '../../components/AboutUs/AboutUs';
import Hero from '../../components/Hero/Hero';
import Reviews from '../../components/Reviews/Reviews';

const HomePage = () => {
  return (
    <main className="main">
      <Hero />
      <AboutUs />
      <Reviews />
    </main>
  );
};

export default HomePage;
