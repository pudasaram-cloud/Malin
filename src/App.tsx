import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Technology />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}




