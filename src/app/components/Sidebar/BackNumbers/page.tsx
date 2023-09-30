import Link from 'next/link'
import React from 'react'

function BackNumbers() {
  return (
    <div className=' sm:w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-1/2'>
            <div className='sm:pl-8'></div>
          <div className=' w-1/6  h-1/2'></div>
            <div className=' w-5/6 h-1/2   '>
            <br></br>
            
          
            <br />
              <div className=' text-orange-500 text-left font-bold  sm:text-6xl sm:mt-40 sm:ml-60 mt-20 text-xl'>
              BackNumbers
              </div>
    
    </div>
    </div>
    <>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
      <div className='z-20 sm:text-4xl sm:mb-20 sm:mt-0 mb-20 text-xl ml-10  '>
         <button type='button' className=' bg-pink-300  sm:px-20 sm:mx-80  rounded-md  hover:scale-105 scale-95 z-20'>
                    <Link href={'/components/Sidebar/BackNumbers/backNumber9'} className='z-30'>
                      

                      2023年9月
                      
                    </Link>
        </button>   
      </div>
      <div className='z-10 sm:text-4xl sm:mb-80 sm:mt-0 text-xl ml-10 '>
         <button type='button' className=' bg-pink-300  sm:px-20 sm:mx-80  rounded-md  hover:scale-105 scale-95 z-20'>
                    <Link href={'/components/Sidebar/BackNumbers/backNumber10'} className='z-30'>
                      

                      2023年10月
                      
                    </Link>
        </button>   
      </div>
                
               
    </>        
    </div>
    

  )
}

export default BackNumbers