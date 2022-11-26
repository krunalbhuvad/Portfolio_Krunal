import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
// import './Header.css';
const HeaderSocial = () => {
  return (
    <div className='header_social'>
      <a href="http://linkdin.com" target="_blank" rel="noopener noreferrer"  ><BsLinkedin/></a>
      <a href="http://github.com" target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" ><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial
