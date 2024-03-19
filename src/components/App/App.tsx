import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Shop from '../Shop/Shop';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';

const AppRouter: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {isHomePage && (
        <div>
          <Footer />
        </div>
      )}
    </main>
  );
};
export default AppRouter;
