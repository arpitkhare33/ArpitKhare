import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Education from './Components/Pages/Education';
import Experience from './Components/Pages/Experience';
import Achievements from './Components/Pages/Achievements';
import Projects from './Components/Pages/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App-Container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/education' element= {<Education/>} />
          <Route path='/experience' element= {<Experience/>} />
          <Route path='/achievements' element= {<Achievements/>} />
          <Route path='/projects' element= {<Projects/>} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
