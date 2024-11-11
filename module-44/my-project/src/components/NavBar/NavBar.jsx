import React, { useState } from 'react'
import Link from '../Link/Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";


const NavBar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/profile', name: 'Profile' },
        { id: 3, path: '/about', name: 'About' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/settings', name: 'Settings' }
      ];
      
  return (
    <nav >
        <div className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
            {
                open===true?<RiCloseLargeFill></RiCloseLargeFill>: <HiMenuAlt1 ></HiMenuAlt1>
            }
           
        </div>
        <ul className={`md:flex duration-1000 gap-4 ${open?'left-0':'-left-28'}  bg-sky-300 absolute md:static px-5 py-2`}>
            {
                routes.map((route)=><Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
  )
}

export default NavBar
