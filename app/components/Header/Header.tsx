import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-5">
    <div className='container rx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Navbar</h1>       
      <nav>
              
<ul className="flex gap-6">

<li><Link href="/" className=' hover:text-red-500'>Home</Link></li>
<li><Link href="/about-us" className=' hover:text-red-500'>About us</Link></li>
<li><Link href="/contact-us" className=' hover:text-red-500'>Contact us</Link></li>

</ul>
            </nav>
            </div>
        </header>
      
   

  );
};

export default Header;
