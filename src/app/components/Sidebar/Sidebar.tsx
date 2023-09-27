import Link from 'next/link'
import React from 'react'



function Sidebar() {
  return (
    <div className=" fixed h-screen w-1/6 pl-0 ml-2 text-left  flex flex-col mr-0 border-r-4 border-blue-900">
        
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          {/* <Home /> */}
          <div className='w-full  pr-1  mr-1 py-1 my-0  '>
            <button type='button' className=' w-full mb-1 mr-1 pr-1 text-xl font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 rounded-lg active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/"}>
              {/* <div className={``}> */}
              Home
                    {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='w-full  pr-1  mr-1 py-1 my-0  '>
            <button type='button' className=' w-full mb-1 mr-1 pr-1 text-xl font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 rounded-lg active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={'/BackNumbers'}>
              {/* <div className={``}> */}
              <a href={'/components/Sidebar/BackNumbers'}>
              BackNumbers
              </a>      {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='w-full  pr-1  mr-1 py-1 my-0  '>
            <button type='button' className=' w-full mb-1 mr-1 pr-1 text-xl font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 rounded-lg active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/"}>
              {/* <div className={``}> */}
              OtherGenres
                    {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='w-full  pr-1  mr-1 py-1 my-0  '>
            <button type='button' className=' w-full mb-1 mr-1 pr-1 text-xl font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 rounded-lg active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/"}>
              {/* <div className={``}> */}
              Inquiry
                    {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          
          {/* <div>
      <Link href={"/"}>
          <div className={`mb-3 text-xl font-bold text-slate-50  active:shadow-none hover:scale-105 hover:shadow-none hover:ml-1 `}>
            OtherGenres{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </div>
      </Link>
    </div>
          <div>
      <Link href={"/"}>
          <div className={`mb-3 text-xl font-bold text-slate-50 hover:shadow-lg active:shadow-none hover:scale-105  hover:ml-1 `}>
            BackNumbers{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </div>
      </Link>
    </div>
          <div>
      <Link href={"/"}>
          <div className={`mb-3 text-xl font-bold text-slate-50 hover:shadow-lg active:shadow-none hover:scale-105  hover:ml-1 `}>
            Inquiry{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </div>
      </Link>
    </div> */}
          
          
        

        
          {/* <BackNumbers />
          
        

        
          <OtherGenres />
          
        

        
          <Inquiry /> */}
          
        
          </div>
  )
}

export default Sidebar