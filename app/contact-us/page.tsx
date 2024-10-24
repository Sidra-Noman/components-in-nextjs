
import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'



function Contactpage  () {
    return (
      <div className='bg-red-300 flex h-[100%] flex-col space-y-8  '>
         <Header/>
        <h1 className='p-18 text-center text-2xl font-semibold  underline'>Contact Me</h1>
        <div className='flex  gap-9  justify-center items-center' >
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-black w-[250px]'
                id='name' />
              </div>
              <div className='flex gap-9 justify-center items-center'>
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-black w-[250px]'
                id='email' />
              </div>
              <div className='flex gap-3 justify-center items-center' >
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-black w-[250px]'
                id='msg' rows={8} >
                  </textarea>
              </div>
              <button className='bg-pink-400 p-2 px-6 w-[90px] m-[670px]' >Send</button>
            
        <Footer/>
    </div>
    );
  };
  
  export default Contactpage;
  