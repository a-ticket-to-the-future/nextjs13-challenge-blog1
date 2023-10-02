import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog1() {
  return (
        <div className=' sm:w-screen w-screen flex flex-col '>
    
          {/* <br></br>
          <br></br>
          <br></br> */}
          <div className=' flex h-screen'>
            <div className='sm:pl-8 pl-3 sm:ml-2 ml-0'></div>
          <div className=' w-1/6  h-screen'></div>
            <div className=' w-5/6 h-screen   '>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* メディカルアロマ　中 */}
            <div className='sm:Z-10 z-50 sm:ml-60 sm:mr-0 sm:mb-0 ml-50 hover:scale-105 active:scale-95'>
              <Link href={"https://px.a8.net/svt/ejp?a8mat=3HKPL2+14HJGI+4N8K+61JSH"} >
                <a href="https://px.a8.net/svt/ejp?a8mat=3HKPL2+14HJGI+4N8K+61JSH" rel="nofollow">
                  <Image className='border-0'  width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=210918278068&wid=003&eno=01&mid=s00000021674001015000&mc=1"/></a>
                  <Image className='border-0'  width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3HKPL2+14HJGI+4N8K+61JSH" alt=""/>
              </Link>
            </div>
            <br></br>
            <br></br>
            <br />
              <div className=' text-orange-500 text-left font-bold  sm:text-4xl text-xl'>
                メディカルアロマってご存知ですか？
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' sm:w-3/4 w-screen sm:text-xl text-xs h-300 border-4 text-blue-700 font-semibold overflow-wrap break-word  border-blue-700 p-5 '>
                  メディカルアロマとは、植物の香りの成分を使って、心と体の不調を改善したり、健康を維持したりする自然療法の一つです。メディカルアロマは、フランスやベルギーなどでは医療行為として認められており、医療や福祉の現場でも活用されています1。

                  メディカルアロマを学ぶことで、自分も含めて家族の健康を守る手助けができたり、不調に苦しむ誰かにあなた自身が手を差し伸べることができたら、それはとても素敵なことですよね？

                  困っている誰かの助けになれるスキルを身につけてみたい方、
                  メディカルアロマについて興味を抱いてくださった方は

                  ぜひ、こちらをご確認ください。
                  <br />
                  <br />
                  <div>
                    <div></div>
                  {/* メディカルアロマ 大 */}
                  <div className='sm:Z-10 z-50 sm:mb-0  hover:scale-105 active:scale-95'>
                    <Link href={"https://px.a8.net/svt/ejp?a8mat=3HKPL2+14HJGI+4N8K+61Z81"}>
                    <a href="https://px.a8.net/svt/ejp?a8mat=3HKPL2+14HJGI+4N8K+61Z81" rel="nofollow" className='z-50'>
                      <Image className='border-1'  width="600" height="600" alt="" src="https://www21.a8.net/svt/bgt?aid=210918278068&wid=003&eno=01&mid=s00000021674001017000&mc=1"/></a>
                      <Image className='border-1'  width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=3HKPL2+14HJGI+4N8K+61Z81" alt=""/>
                    </Link>
                  </div>
                  </div>
                  <br />
                  <br />
                  これを機に誰かの役に立てる、自身の変化を手に入れるかどうかは
                  あなた次第です。
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
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 sm:px-10 sm:mx-10 px-4 py-0 my-0    rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50 sm:px-10 px-2 py-0 my-0 '>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 sm:mx-5 py-0 my-0 px-3 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog2'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
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

export default Blog1