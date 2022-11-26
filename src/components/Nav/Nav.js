import React from 'react'
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'

import { useState } from 'react';

const Nav = () => {
 
  const [activeNav , setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#') } className={activeNav ==='#' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav ==='#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#exprience" onClick={() => setActiveNav('#exprience') } className={activeNav ==='#exprience' ? 'active' :''}><BiBook/></a>
      <a href="#service" onClick={() => setActiveNav('#service') } className={activeNav ==='#service' ? 'active' :''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav ==='#contact' ? 'active' :''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav
