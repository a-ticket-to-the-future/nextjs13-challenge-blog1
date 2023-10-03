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
    <main className="flex  sm:min-h-screen flex-col sm:overflow-y-scroll overflow-y-scroll h-screen w-screen ">
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


      <div className=' z-10 absolute flex  sm:h-screen sm:w-screen'>
      <div className='z-20'>
      <Sidebar />
      </div>
          
         <div className=' sm:w-1/6'></div> 
          <div className=' z-10 flex flex-col sm:w-5/6 ' >
            <div className=" sm:fixed justify-center text-center pl-0 ml-0 pt-0 font-extrabold  sm:text-6xl text-2xl text-slate-50 mt-10 mr-80 drop-shadow-lg shadow-gray-500 ">
                <br></br>
                <br></br>
                <br></br>
                <div className='z-0'>
                    最新の投稿一覧
                </div>
                <br />
                <br />
                <br />
            <div className='sm:flex   sm:gap-20 gap-10 sm:pl-7 sm:pr-5 '>
              {/*  */}
              <div className='sm:flex-col  '>
                
                <Link href={'/blogs/Blog1'} className=' text-orange-500 text-lg sm:w-167 sm:h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                <Image 
                         src="https://www28.a8.net/svt/bgt?aid=210918278068&wid=003&eno=01&mid=s00000021674001015000&mc=1"
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                         {/* className='border-0'  width="300" height="250" alt="" */}
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                  <div className=' text-xs font-bold text-slate-50 sm: py-2'>メディカルアロマ</div>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog1'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿１
                     </a>
                   </button>
                   <div className=' mt-2 ml-0 mr-7'>
                   <div className='text-xs font-semibold text-pink-400'>知ってる？</div>
                   <div className='text-xs font-semibold text-pink-400'>香りの力🥰</div>
                   </div>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog2'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 '>
                     
                      <Image 
                        
                        src='https://www28.a8.net/svt/bgt?aid=210917244368&wid=003&eno=01&mid=s00000012521006028000&mc=1' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br></br> */}
                   
                   
                </Link>
                <div className='py-2'>
                <div className=' text-xs font-bold text-slate-50 sm:mr-7 sm:my-2'>Crowdtech</div>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog2'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿２
                     </a>
                   </button>
                   <div className=' mt-2 ml-0 mr-7'>
                   <div className='text-xs font-semibold text-green-600'>備えてる？</div>
                   <div className='text-xs font-semibold text-green-600'>予期せぬ</div>
                   <div className='text-xs font-semibold text-green-600'>就業不能に😱</div>
                   </div>
                   </div>  
                </div>
              <div>
                
                <Link href={'/blogs/Blog3'} className=' text-orange-500 text-lg w-167 h-146 cursor-pointer hover:scale-105 active:scale-95 mb-0 '>
                     
                      <Image 
                        
                        src='https://www20.a8.net/svt/bgt?aid=210911141440&wid=003&eno=01&mid=s00000020861001007000&mc=1' 
                        alt='image' 
                        width={167}
                        height={146}
                        className=' hover:scale-110 active:scale-95'
                         />
                    
                    {/* <br>167,146</br> */}
                   
                   
                </Link>
                <div className='py-2'>
                <div className=' text-xs font-bold text-slate-50  mr-8 mt-0'>メディカルフード</div>
                   <button type='button' className=' bg-yellow-200 border border-yellow-200 rounded-md justify-items-end flex shadow-sm shadow-slate-500 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-95'>
                    <a href={'/blogs/Blog3'} className='text-orange-400 text-lg w-167 h-146 cursor-pointer text-center py-1 mx-2 justify-items-end flex'>
                     投稿３
                     </a>
                   </button>
                   <div className=' mt-2 ml-0  mr-4'>
                   <div className='text-xs font-semibold text-yellow-300'>食べたいものを</div>
                   <div className='text-xs font-semibold text-yellow-300'>美味しく</div>
                   <div className='text-xs font-semibold text-yellow-300'>幸せ時間😊</div>
                   </div>
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
