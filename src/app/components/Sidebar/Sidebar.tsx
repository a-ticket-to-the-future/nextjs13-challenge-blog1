import React from 'react'
import Home from './SidebarChildren/Home'
import BackNumbers from './SidebarChildren/BackNumbers'
import OtherGenres from './SidebarChildren/OtherGenres'
import Inquiry from './SidebarChildren/Inquiry'

function Sidebar() {
  return (
    <div className=" h-screen w-1/6 pl-0 ml-2 text-left  flex flex-col mr-0 border-r-4 border-blue-900">
        
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <Home />
          
          
        

        
          <BackNumbers />
          
        

        
          <OtherGenres />
          
        

        
          <Inquiry />
          
        
          </div>
  )
}

export default Sidebar