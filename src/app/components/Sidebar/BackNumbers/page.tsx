import Link from 'next/link'
import React from 'react'

function BackNumbers() {
  return (
    <div className=' w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-1/2'>
            <div className='pl-8'></div>
          <div className=' w-1/6  h-1/2'></div>
            <div className=' w-5/6 h-1/2   '>
            <br></br>
            
          
            <br />
              <div className=' text-orange-500 text-left font-bold  text-6xl mt-40 ml-60 '>
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
    
      <div className='z-10 text-4xl mb-20 mt-0  '>
         <button type='button' className=' bg-pink-300  px-20 mx-80  rounded-md  hover:scale-105 scale-95'>
                    <Link href={'/components/Sidebar/BackNumbers/BackNumber9'}>
                      

                      2023年9月
                      
                    </Link>
        </button>   
      </div>
      <div className='z-10 text-4xl mb-80 mt-0 '>
         <button type='button' className=' bg-pink-300  px-20 mx-80  rounded-md  hover:scale-105 scale-95'>
                    <Link href={'/components/Sidebar/BackNumbers/BackNumber10'}>
                      

                      2023年10月
                      
                    </Link>
        </button>   
      </div>
                
               
    </>        
    </div>
    

  )
}

export default BackNumbers