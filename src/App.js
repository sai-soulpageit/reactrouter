import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

import Header from './components/Header';
// this is method 2

// import Error from './Error';
{/* import component first and then use it in element */}

function App() {
  return (

    <div className='App'>
    <BrowserRouter>

    <Header/>
    {/* this is methid 2 rendering Header here and removing header in Home.js */}


    <Routes>
      <Route path="/"  element ={<Home />}/>
      <Route path="about"  element ={<About />}/>
      <Route path="contact"  element ={<Contact />}/>
      {/* <Route path="*" element={<Error/>}/> */}
      {/* import component first and then use it in element */}

      {/* </Route> - removed this in method 2*/}
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
