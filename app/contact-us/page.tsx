
import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'



function Contactpage  () {
    return (
      <div className='bg-red-300 flex h-screen flex-col'>
         <Header/>
        <h1 className='p-16 text-center text-2xl'>This is my contact page.</h1>
        <Footer/>
    </div>
    );
  };
  
  export default Contactpage;
  