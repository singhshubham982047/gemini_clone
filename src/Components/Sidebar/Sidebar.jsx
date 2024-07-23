import React from 'react'
import { assets } from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top"><img src={assets.menu_icon} alt="menu" /></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar