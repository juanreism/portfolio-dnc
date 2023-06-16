import Footer from './components/sections/Footer';
import Navbar from './components/sections/Navbar';
import Presentation from './components/sections/Presentation';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>

      <div id="Presentation"><Presentation/></div>
      <div id="Skills"><Skills/></div>
      <div id="Projects"> <Projects/> </div>
      
      <Footer/>
    </div>
  );
}

export default App;
