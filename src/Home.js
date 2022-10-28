import React from 'react';
import './Home.css'

// import Header from './components/Header';

import {Outlet}  from 'react-router-dom';
// The NavLink is used when you want to highlight a link as active. So, on every routing to a page, the link is highlighted according to the activeClassName . Link is for links that need no highlighting. And a is for external links.

const Home = () => {
  return (

    <div>

    {/* <Header/> */}
    {/* removed <Header/> in method 2  */}

     <div className='homesession'>
      <span>This is </span>
      <span className='stroke'>React Router</span>
      <span>Example</span>
     </div>

     <Outlet/>

    </div>
  )
}

export default Home