import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog3() {
  return (
    <div className=' sm:w-screen w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-screen'>
            <div className='sm:pl-8 sm:ml-2 pl-3'></div>
          <div className=' w-1/6  h-screen'></div>
            <div className=' w-5/6 h-screen   '>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br />
              <div className=' text-orange-500 text-left font-bold  sm:text-4xl text-xl'>
                投稿３
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' sm:w-3/4 w-screen sm:text-xl text-xs h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                    ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中ここに本文。テスト入力中
                  </div>
                  <div className=' sm:h-300 sm:w-167 sm:h-146 sm:pl-10 sm:ml-5'>
                    <Image 
                        src={'/image/flowers-7242099_640.jpg'} 
                        alt='BlogsImage'
                        width={167}
                        height={146}
                        />
                  </div>
                </div>
                <br />
                <div className='flex sm:mx-10 my-0 py-0'>
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 px-4 sm:ml-1 sm:mr-5 py-m my-0  rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog2'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 sm:px-10 sm:mx-10 px-4 py-0 my-0    rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50 sm:px-10 px-2 py-0 my-0 '>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 sm:mx-5 py-0 my-0 px-3 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog4'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      次の記事
                    </Link>
                  </button> 
          </div> 
          <br />
            </div>
          </div>
        </div>
  )
}

export default Blog3