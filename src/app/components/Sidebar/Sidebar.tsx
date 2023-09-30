import Link from 'next/link'
import React from 'react'



function Sidebar() {
  return (
    <div className=" fixed sm:h-screen sm:w-1/6 sm:pl-0 sm:ml-2 text-left  sm:flex flex h-10% items-center sm:flex-col mr-0 sm:border-r-4 sm:border-blue-900 pl-0">
        
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          {/* <Home /> */}
          <div className=' sm:w-full  sm:pr-0  sm:mr-6 sm:py-0 sm:my-0 px-0 mx-0 ml-3 mr-1  '>
            <button type='button' className=' sm:w-full sm:mb-1 sm:mr-2 sm:pr-1 sm:py-0 sm:pl-0 ml-1 px-0 mt-0 py-0 mx-0 sm:text-xl text-xs font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 sm:rounded-lg rounded-sm active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/"} className='z-20 sm:mx-5 sm:mr-10 my-0 pl-1 mr-1 ml-0 sm:text-xl text-xs px-0'>
              {/* <div className={``}> */}
              Home
                    {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='sm:w-full  sm:pr-1  sm:mr-1 sm:py-1 sm:my-0 py-0 my-0 mr-1 pl-1 '>
            <button type='button' className=' sm:w-full sm:mb-1 sm:mr-1 sm:pr-1 sm:text-xl text-xs  pr-0 ml-0  py-0 my-0 font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 sm:rounded-lg rounded-sm  active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={'/BackNumbers'}>
              {/* <div className={``}> */}
              <a href={'/components/Sidebar/TermsOfService'} className=' z-10 sm:px-10 '>
              利用規約
              </a>      {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className=' z-20 sm:w-full  sm:pr-1  sm:mr-1 sm:py-1 sm:my-0 pl-1  '>
            <button type='button' className=' z-10 sm:w-full mb-1 mr-1 pr-1 sm:text-xl text-xs font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 sm:rounded-lg rounded-sm  active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={'/BackNumbers'} className='z-10'>
              {/* <div className={``}> */}
              <a href={'/components/Sidebar/BackNumbers'} className=' z-20 px-0'>
              BackNumbers
              </a>      {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='sm:w-full  sm:pr-1  sm:mr-1 sm:py-1 sm:my-0 pl-1  '>
            <button type='button' className=' sm:w-full mb-1 mr-1 pr-1 sm:text-xl text-xs font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 sm:rounded-lg rounded-sm active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/components/Sidebar/OtherGenres"} className='px-0'>
              {/* <div className={``}> */}
              OtherGenres
                    {/* <span className="inline-block transition-transform group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transform-none">
              
                    </span> */}
              {/* </div> */}
             </Link>
             
             </button> 
          </div>
          <div className='sm:w-full  pr-1  mr-1 py-1 my-0   '>
            <button type='button' className=' sm:w-full mb-1 mr-1 pr-1 sm:text-xl text-xs font-bold text-slate-50 bg-cover bg-blue-400 bg-opacity-40 sm:rounded-lg rounded-sm active:shadow-none hover:scale-105  active:scale-95 hover:text-opacity-1 '>
             <Link href={"/components/Sidebar/Inquiry"} className='sm:px-10  '>
              {/* <div className={``}> */}
              お問い合わせ
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