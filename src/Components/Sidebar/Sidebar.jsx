import React, { useState } from 'react'
import { assets } from "../../assets/assets"

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] text-sm'>
      <div className="top">
        <img className='menu block ml-[10px] cursor-pointer ' src={assets.menu_icon} alt="menu" onClick={() => setExtended(prev => !prev)} />
        <div className='new-chat mt-5 inline-flex items-center gap-[10px] py-[8px] px-4 bg-[#e6eaf1] rounded-full text-gray-500 cursor-pointer'>
          <img src={assets.plus_icon} alt="new-chat" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && <div className='recent flex flex-col '>
          <p className='recent-title mt-[30px] mb-[20px]'>Recent</p>
          <div className="recent-entry flex  items-start gap-[10px] p-[10px] pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.message_icon} alt="message" />
            <p>What is react...</p>
          </div>
        </div>}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full text-[#282828] cursor-pointer  hover:bg-[#e2e6eb]  ">
          <img src={assets.question_icon} alt="question" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full text-[#282828] cursor-pointer  hover:bg-[#e2e6eb] ">
          <img src={assets.history_icon} alt="history" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full text-[#282828] cursor-pointer  hover:bg-[#e2e6eb] ">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar