import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBarItem({link,name}) {
  return (
    <li className='p-8 font-medium text-sm leading-5'>
        <Link to={link}>{name}</Link>
    </li>
  )
}
