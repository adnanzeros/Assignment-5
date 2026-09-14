import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Footer from './components/footer.jsx';
import TechnologyCard from './components/technologycard.jsx';

function App() {
  return (
    <>
      <ToastContainer />

      <Nav />
      <Hero />
      <TechnologyCard />
      <Footer />
    </>
  );
}

export default App;
