import React from 'react';
import './About.css'
import { useNavigate } from 'react-router-dom';
// import Header from "./components/Header"


const Contact = () => {
  
  const thapa = useNavigate();
  // destructing - u can keep any name

  const xyz=()=>{
    thapa('/')
  }
   
  return (
    <div className='aboutsession'>

     {/* <Header/> */}

     <section>

      <h1>Contact Us</h1>

      <p> We share and care in safe surroundings, over a cup of coffee or tea and spoonfuls of friendship. Bring your queries, worries and stories and become a part of the village that it takes! </p>

      <p>To attend please write to us at <b>yashwanth.kaleswarapu@soulpageit.com</b> Once we see your response we will send you an email with the address.</p>

       <p>Hope to see you there!</p>

      <button onClick={xyz}>Go to Home page</button>
      {/* can write function like this also  */}

      {/* go back functionality -  navigate(-1) or thapa(-1) is equivalent to hitting the back button. */}
      <button onClick={()=>{thapa(-1)}}>Go back</button>
      {/* thapa(-1) / navigate(-1)  - the name given in array destructuring so here we used thapa */}

      </section>
    </div>
  )
}

export default Contact