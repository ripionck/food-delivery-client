import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu/Menu';
import About from './pages/AboutUs/About';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/aboutus' element={<About />} />
      </Routes>
      <Footer />
    </Navbar>
  );
}

export default App;
