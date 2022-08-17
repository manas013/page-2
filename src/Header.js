import React from 'react'
import './Css/header.css'

function Header() {
  return (
    <div className='header'>
        {/* <div className='left'>
        <img id='icon' src='./images/Icon.svg'  alt='Icon'/>
        <img id='name' src='./images/Name.svg'  alt='name'/>
           

        </div>
        <div className='right'>

        </div> */}
          <nav className='navbar'>
    <div ><img className='icon'src='./images/Icon.svg' /><br/><span className='logo'>ELECTRUM</span></div>
    <ul className='nav'>
        <li><button className='btn'>Get Started</button></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Installers</a></li>
        <li><a href='#'>Sign In</a></li>
        <li><img src='./images/call.svg' /></li><li className='phn'>888-454-9979</li>
       </ul>
       </nav>
      
    </div>
  )
}

export default Header
