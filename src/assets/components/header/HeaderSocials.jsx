import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='HeaderSocials'>
        <a href='https://linkedin.com'  target = "_blank"><BsLinkedin/></a>
        <a href='https://github.com/mesabmk'  target = "_blank"><BsGithub/></a>
        <a href='https://Instagram.com/mesabmk'  target = "_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials