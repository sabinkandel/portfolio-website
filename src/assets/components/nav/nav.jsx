import  React, {useState} from 'react'

import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'


const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
   
    <nav>
     <a href='#' onClick={()=> setactiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    
      <a href='#experience' onClick={()=> setactiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#services'onClick={()=> setactiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href='#contact'onClick={()=> setactiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav