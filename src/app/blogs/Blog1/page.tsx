import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog1() {
  return (
        <div className=' w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-screen'>
            <div className='pl-8 ml-2'></div>
          <div className=' w-1/6  h-screen'></div>
            <div className=' w-5/6 h-screen   '>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br />
              <div className=' text-orange-500 text-left font-bold  text-4xl'>
                投稿１
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 text-xl h-300 border-4 text-blue-700 font-semibold overflow-wrap break-word  border-blue-700 p-5 '>
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
                  <div className=' h-300 w-167 h-146 pl-10 ml-5'>
                    <Image 
                        src={'/image/flowers-7242099_640.jpg'} 
                        alt='BlogsImage'
                        width={167}
                        height={146}
                        />
                  </div>
                </div>
                <br />
                <div className='flex mx-10'>
                  
                  <button type='button' className=' z-10 bg-pink-300 px-10 ml-1 mr-5 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 text-4xl text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 px-10 mx-10  rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 text-4xl text-slate-50 px-10'>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 px-10 mx-5 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog2'} className=' z-10 text-4xl text-slate-50'>
                      次の記事
                    </Link>
                  </button> 
          </div> 
            </div>
          </div>
        </div>
          
  )
}

export default Blog1