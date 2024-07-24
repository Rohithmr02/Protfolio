
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Project from './component/Project/Project';
import Service from './component/Services/Service';


function App() {
  return (
    <div className="App">
      <Home/>
      <Service/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
