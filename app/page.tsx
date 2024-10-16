import Link from "next/link"
import React from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero"

const Homepage = () => {
  return (
    <div className="flex h-screen flex-col">
<Header/>
<Hero/>
<Footer/>
      
      
    
    </div>
  );
};

export default Homepage;
