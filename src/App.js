import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Donations from './components/Donations';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Donations />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
