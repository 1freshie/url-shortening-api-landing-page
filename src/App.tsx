import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import LinkShorter from './components/LinkShorter/LinkShorter';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import BoostSection from './components/BoostSection/BoostSection';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <LinkShorter />
      <StatisticsSection />
      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
