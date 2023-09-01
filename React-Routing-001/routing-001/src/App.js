// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blog from './Components/Blog';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Blog/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;