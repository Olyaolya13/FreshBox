import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Shop from '../Shop/Shop';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </main>
  );
};
export default AppRouter;
