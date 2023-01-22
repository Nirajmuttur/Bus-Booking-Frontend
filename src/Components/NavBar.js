import React from 'react'
import NavBarItem from './NavBarItem'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className='flex items-center'>
        <Link to={'/'}>
            <div className='ml-24 hover:cursor-pointer'>
                <img src='./Logo.png'/>
            </div>
        </Link>
        <ul className='flex items-center ml-72'>
            <NavBarItem name={'Home'} link={'/'}/>
            <NavBarItem name={'Search'} link={'search'}/>
            <NavBarItem name={'Hotels'} link={'hotel'}/>
            <NavBarItem name={'Bookings'} link={'bookings'}/>

            <li className='ml-10 p-8 font-medium text-sm leading-5'>
                <Link to={"login"}>Login</Link>
            </li>
            <li className='p-2 font-medium text-sm leading-5 outline outline-offset-2 outline-1 rounded'>
                <Link to={"register"}>Sign Up</Link>
            </li>
        </ul>
        
    </nav>
  )
}
