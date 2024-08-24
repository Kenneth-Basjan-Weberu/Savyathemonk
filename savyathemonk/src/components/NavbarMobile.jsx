import React from 'react';
import { Link } from 'react-scroll';
import { CgClose } from 'react-icons/cg';
import Button1 from './Button1';

const NavbarMobile = ({showMenu, active}) =>{
  return (
    <div>
        <ul className={active ? 'md:hidden z-10 flex flex-col items-center fixed inset-0 left-1/4 justify-center uppercase gap-8 p-8 bg-black/30 backdrop-blur-lg ' : 'hidden'}>
            <CgClose onClick={ showMenu } className='text-2xl cursor-pointer'/>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='about' smooth={true} duration={1000} className='cursor-pointer'>About</Link></li>
            <li className='hover:text-[#906EF0] hover:animate-pulse'><Link to='services' smooth={true} duration={1200} className='cursor-pointer'>Donate</Link></li>
            <Link to='contact' smooth={true} duration={2000} className='hover:text-white cursor-pointer'><Button1>Contact</Button1></Link>
        </ul>
    </div>
  );
};

export default NavbarMobile