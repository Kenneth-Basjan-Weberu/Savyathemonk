import React, { useState } from 'react';
// import {logo} from '../assets';
import Button1 from './Button1';
import { Link } from 'react-scroll'
import {CgMenuGridO} from 'react-icons/cg';
import NavbarMobile from './NavbarMobile';

const Navbar = () =>{
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <nav className='flex justify-between m-2 items-center font-medium'>
        <div>
          <div className="logo">
          {/* <img src={logo} alt='logo' className='w-24 md:w-40 h-auto object-contain' /> */} STM
          </div>
        </div>

        <div className='mx-10'>

          <div className='absolute right-6 top-8 text-2xl md:hidden'>
            <CgMenuGridO onClick={showMenu} className='cursor-pointer'/>
          </div>

          <ul className='hidden md:flex justify-around flex-row items-center text-white text-[18px] uppercase gap-8'>
              <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='about' smooth={true} duration={1000} className='cursor-pointer'>About</Link></li>
              <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='services' smooth={true} duration={1200} className='cursor-pointer'>Donate</Link></li>
              <Link to='contact' smooth={true} duration={2000} className='hover:text-white cursor-pointer'><Button1>Contact</Button1></Link>
          </ul>

          <NavbarMobile showMenu={showMenu} active={active}/>

        </div>
    </nav>
  );
};

export default Navbar