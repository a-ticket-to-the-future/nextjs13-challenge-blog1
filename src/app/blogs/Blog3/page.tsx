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
                  <div className='sm:flex-col flex-col sm:z-20 z-30 '>
                  {/* ロリポップ　中 */}
                  <div className='sm:z-10 z-50 sm:ml-20 sm:mr-0 sm:mb-0 ml-30 mb-2 hover:scale-105 active:scale-95'>
                    <Link href={"https://px.a8.net/svt/ejp?a8mat=3HKIIT+2XZ802+348+6L9O1"} >
                      <a href="https://px.a8.net/svt/ejp?a8mat=3HKIIT+2XZ802+348+6L9O1" rel="nofollow">
                        <Image className='border-0'  width="336" height="280" alt="" src="https://www24.a8.net/svt/bgt?aid=210909125178&wid=003&eno=01&mid=s00000000404001107000&mc=1"/></a>
                        <Image className='border-0'  width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=3HKIIT+2XZ802+348+6L9O1" alt=""/>
                    </Link>
                  </div>
                  {/* 365日記念日デコケーキ */}
                  <div className='sm:z-10 z-50 sm:ml-20 sm:mr-0 sm:mb-0 ml-30 my-2 hover:scale-105 active:scale-95'>
                    <Link href={"https://px.a8.net/svt/ejp?a8mat=3HR8H2+5DHXXE+426S+699KH"} >
                      <a href="https://px.a8.net/svt/ejp?a8mat=3HR8H2+5DHXXE+426S+699KH" rel="nofollow">
                        <Image className='border-0'  width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=211222694325&wid=003&eno=01&mid=s00000018946001051000&mc=1"/></a>
                        <Image className='border-0'  width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3HR8H2+5DHXXE+426S+699KH" alt=""/>
                    </Link>
                  </div>
                  {/* crowdtech　中　フリーランスでも会社員と同じように */}
                  <div className='sm:z-10 z-50 sm:ml-20 sm:mr-0 sm:mb-0 ml-30 my-2 hover:scale-105 active:scale-95'>
                    <Link href={"https://px.a8.net/svt/ejp?a8mat=3HKOSC+633KXU+2OM2+ZW0CH"} >
                      <a href="https://px.a8.net/svt/ejp?a8mat=3HKOSC+633KXU+2OM2+ZW0CH" rel="nofollow">
                        <Image className='border-0'  width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=210917244368&wid=003&eno=01&mid=s00000012521006028000&mc=1"/></a>
                        <Image className='border-0'  width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3HKOSC+633KXU+2OM2+ZW0CH" alt=""/>
                    </Link>
                  </div>
                  {/* カップルリング 帯小　the kiss */}
                  <div className='sm:z-10 z-50 sm:ml-20 sm:mr-0 sm:mb-0 ml-30 my-2 hover:scale-105 active:scale-95'>
                    <Link href={"https://px.a8.net/svt/ejp?a8mat=3N1YIC+59XCAQ+1O28+IISMP"} >
                      <a href="https://px.a8.net/svt/ejp?a8mat=3N1YIC+59XCAQ+1O28+IISMP" rel="nofollow">
                        <Image className='border-0'   width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=220121076319&wid=003&eno=01&mid=s00000007784003111000&mc=1"/></a>
                        <Image className='border-0'   width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=3N1YIC+59XCAQ+1O28+IISMP" alt=""/>
                    </Link>
                  </div>
                  </div>
                  {/* <div className=' sm:h-300 sm:w-167 sm:h-146 sm:pl-10 sm:ml-5'>
                    <Image 
                        src={'/image/flowers-7242099_640.jpg'} 
                        alt='BlogsImage'
                        width={167}
                        height={146}
                        />
                  </div> */}
                </div>
                <br />
                <div className='flex sm:ml-2 sm:mr-10 my-0 py-0'>
                  
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