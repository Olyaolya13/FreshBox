import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const AppRouter: React.FC = () => {
  return (
    <main className="main">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};
export default AppRouter;
