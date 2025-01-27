import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-center items-center py-3'>
      <ul className='flex space-x-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
       </ul>
    </nav>
  )
}
