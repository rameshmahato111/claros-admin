import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
const UserProfile = ({src, className}) => {
  return (
    <div className={`${className} p-4 shadow-lg ring ring-gray-900/5 mx-4 mb-3 gap-4`}>
                <IoMdSettings className="text-2xl"/>
                <div className="relative">
                  <IoNotifications className="text-2xl relative "/>
                  <div className="absolute top-0 left-3 rounded-full bg-red-500 text-white px-2 py-1 text-xs text-center animate-pulse">5</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src={src} alt="person" className="size-10 rounded-full" /> <span className="font-medium">Ramesh</span>
                </div>
                
                
              </div>
  )
}

export default UserProfile