import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

const AppRouter: React.FC = () => {
  return (
    <main className="main">
      <Header />
      <Main />
    </main>
  );
};
export default AppRouter;
