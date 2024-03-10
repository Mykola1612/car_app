import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
