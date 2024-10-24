
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'

import Link from "next/link"
import React from 'react'



function Aboutpage  () {
    return (
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 flex h-screen  flex-col" >
  <Header/>
        {/* <h1 className="p-16 text-center text-2xl">This is my about page.</h1> <br /> */}
        <div className='bg bg-purple-500 rounded-lg shadow-lg p-8 m-[80px]  ml-[300px] max-w-2xl text-center '>
        <h2 className='text-2xl font-semibold text-black'>About me</h2>
        <p className='mt-4 text-black'>As a dedicated student at GIAIC, I am currently pursuing an advanced course in Artificial Intelligence, Web 3.0, and the Metaverse. This exciting combination allows me to explore cutting-edge technologies that are shaping the future of digital innovation. Through AI, I am mastering the skills to develop intelligent systems that can solve complex problems and transform industries. My deep dive into Web 3.0 equips me with the knowledge of decentralized technologies, empowering the next generation of the internet. Alongside this, studying the Metaverse gives me insight into the immersive virtual worlds that are redefining how we interact, work, and play. Together, these areas fuel my passion for technology and my desire to be at the forefront of tomorrow’s digital landscape. </p>
      
    </div>
      <Footer/>
      </div>
    )
  }
  
  export default Aboutpage;
  