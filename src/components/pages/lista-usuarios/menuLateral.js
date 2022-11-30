import React from 'react'
import { useState } from 'react'
import styles from './listaUser.module.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'

function MenuLateral() {
    const[sidebar, setSidebar] = useState(false)
    const Menu = () => (!sidebar)
  return (
    <>
    <div className='divIcon'>
        <Link to="#" className='menuBarra'>
        <FaIcons.FaBars onClick={Menu}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu-acvtive': 'nav-menu' }>
        <ul>
            <li className='nav-um'>
                <Link to="#" className='menu-barra'>
                    <GrIcons.GrFormClose/>
                </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default MenuLateral;