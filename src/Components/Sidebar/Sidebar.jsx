import React, { useContext, useState } from 'react'
import { assets } from "../../assets/assets"
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar '>
      <div className="top">
        <img className='menu  ' src={assets.menu_icon} alt="menu" onClick={() => setExtended(prev => !prev)} />
        <div onClick={() => newChat()} className='new-chat '>
          <img src={assets.plus_icon} alt="new-chat" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && <div className='recent '>
          <p className='recent-title '>Recent</p>
          {prevPrompt?.map((item, index) => {
            return <div onClick={() => loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="message" />
              <p>{item.slice(0, 16)} ...</p>
            </div>
          })}

        </div>}
      </div>
      <div className="bottom ">
        <div className="bottom-item recent-entry   ">
          <img src={assets.question_icon} alt="question" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry  ">
          <img src={assets.history_icon} alt="history" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry  ">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar