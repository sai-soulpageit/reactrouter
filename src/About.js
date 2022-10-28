import React from 'react';
import './About.css'
import { useNavigate } from 'react-router-dom';
// import Header from "./components/Header";

const About = () => {

  const navigate = useNavigate();
  // destructuring
  // what all inisde useNavigate() will get into navigate now

  const abcdfunction = ()=>{
    navigate('/contact');

  }

  return (
    <div className='aboutsession' >
    

       {/* <Header/> */}

      
     <section>


      <h1>About Crypocurrencies</h1>

      <p>Major cryptocurrencies like bitcoin (BCH) and ethereum (ETH) lost nearly 60% of their value in 2022, compared to their all-time highs. The crypto industry has since seen a string of bankruptcies of hedge funds and lenders, including Celsius Network, Voyager Digital, and Three Arrows Capital, as well as downsizing in companies such as Blockchain.com and Crypto.com.</p>

      <button onClick={()=> abcdfunction()}>Jump to contact</button>

      

     </section>
    </div>
  )
}

export default About;