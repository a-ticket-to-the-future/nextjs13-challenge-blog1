import Image from 'next/image'
import React from 'react'

function Blog3() {
  return (
    <div className=' w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-screen'>
            <div className='pl-5'></div>
          <div className=' w-1/6 border h-screen border-green-500'></div>
            <div className=' w-5/6 h-screen  border border-red-700 '>
            <br></br>
            <br></br>
            <br></br>
            <br />
              <div className=' text-orange-500 text-left border border-red-800 text-4xl'>
                投稿３
              </div>
                <br />
                <br />
                <div className=' flex  border border-orange-700'>
                  <div className=' w-3/4 text-md h-300 overflow-wrap break-word border border-blue-700 '>
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
            </div>
          </div>
        </div>
  )
}

export default Blog3