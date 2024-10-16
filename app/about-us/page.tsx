
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'

import Link from "next/link"
import React from 'react'



function Aboutpage  () {
    return (
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 flex h-screen flex-col" >
  <Header/>
        <h1 className="p-16 text-center text-2xl">This is my about page.</h1> <br />
      <Footer/>
      </div>
    )
  }
  
  export default Aboutpage;
  