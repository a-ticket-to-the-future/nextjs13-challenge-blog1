import Image from 'next/image'
import Sidebar from './components/Sidebar/Sidebar'
import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Cloud } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';
// import sample from "../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg"

export default function Home() {
  return (
    <main className="flex  sm:min-h-screen flex-col sm:overflow-y-scroll h-screen ">
      {/* <div className=' relative w-screen h-screen bg-scroll border border-blue-900' >
      <Image src='/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像'  layout="fill" objectFit="cover"  />
      </div> */}
      {/* <img src='../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像' /> */}
      <div className="  absolute z-10   items-center sm:w-screen   font-mono text-base lg:flex pr-0 mr-0" >
        <p className="fixed left-1  top-3 flex  sm:w-full pl-1  border-b-4  border-blue-800  mb-0 pt-2 font-bold pb-2 ">  
        {/* bg-gradient-to-b from-zinc-200 backdrop-blur-2xl  dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 */}
          A tickets to the future
          
        </p>
        <div className="fixed bottom-0 left-0 flex sm:h-48 sm:w-full items-end justify-center ">
          {/* bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none */}
          
        </div>
      </div>


      <div className=' absolute flex  sm:h-screen sm:w-screen'>
      <Sidebar />
          
         <div className=' sm:w-1/6'></div> 
          <div className=' z-10 flex flex-col sm:w-5/6 ' >
            <div className=" fixed justify-center text-center pl-0 ml-0 pt-0 font-extrabold  sm:text-6xl text-2xl text-slate-50 mt-10 mr-80 drop-shadow-lg shadow-gray-500 ">
                <br></br>
                <br></br>
                <br></br>
                    最新の投稿一覧
                <br></br>
                <br></br>
                <br />
                <br />
            <div className='sm:flex   gap-20 pl-7 pr-5 '>
              {/*  */}
              <div className='sm:flex-col'>
                
                <Link href={'/blogs/Blog1'} className=' text-orange-500 text-lg sm:w-167 sm:h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog1'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿１
                     </a>
                   </button>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog2'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog2'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿２
                     </a>
                   </button>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog3'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog3'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿３
                     </a>
                   </button>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog4'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog4'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿４
                     </a>
                   </button>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog5'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog5'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿５
                     </a>
                   </button>
                </div>  
              </div>
                
                {/* <Link href={'/blogs/Blog2'} className=' text-orange-500 text-xs'>
                   投稿２
                </Link>
                <Link href={'/blogs/Blog3'} className=' text-orange-500 text-xs'>
                   投稿３
                </Link>
                <Link href={'/blogs/Blog4'} className=' text-orange-500 text-xs'>
                   投稿４
                </Link>
                <Link href={'/blogs/Blog5'} className=' text-orange-500 text-xs'>
                   投稿５
                </Link> */}
              
                {/* <Blog2 />
                <Blog3 />
                <Blog4 />
                <Blog5 /> */}

              </div>

              <br />
              <br />
              <br />
              <div className=' m-5 p-5 justify-items-center '>
                <button className=' z-8 px-8 py-2 m-0 bg-slate-100 rounded-lg hover:scale-110 active:scale-95'>
                  <Link href={"/"}>
                      
                        
                        <HomeIcon fontSize='large' sx={{color: blue[200]}}  />
                        
                      
                    </Link>
                </button>
            </div>
            </div>
            
        </div> 
      </div>  
      
    </main>
  )
}
