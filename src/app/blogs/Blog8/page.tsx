import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog8 = () => {
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
              <div className=' text-orange-500 text-left font-bold  sm:text-4xl test-xs'>
                <h1>現在の日本の経済状況について解説して。</h1>
                <h1>と、お願いしてみた</h1>
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 sm:text-xl text-xs h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
                  <h1>日本の現在の環境問題について、以下のように解説します。</h1>
                  <br />
                  <br />
                      <p>
                        日本は、先進国の中でも環境問題に取り組む意識が高い国の一つですが、それでもまだ多くの課題を抱えています。日本が直面する環境問題の中で、特に重要なものは以下の三つです。
                      </p>
                      <br />
                      <br />
                      <ol>
                        <li>
                            - 地球温暖化対策。日本は、京都議定書やパリ協定などの国際的な枠組みに基づき、温室効果ガスの排出削減に努めています。しかし、2020年度の温室効果ガス排出量は、2013年度と比べてわずか2.1%減少したに過ぎず、2030年度に目指す46%削減という野心的な目標にはまだ大きな隔たりがあります¹。日本は、再生可能エネルギーの普及拡大や省エネ技術の開発・導入、脱炭素社会への転換などを推進する必要があります²。
                        </li>    
                        <br />
                        <li>
                            - 環境汚染対策。日本は、高度経済成長期における大気汚染や水質汚染などの深刻な環境問題を克服するために、環境基準や排出規制などを設けてきました。しかし、現在でも工場や自動車から排出される有害物質や微小粒子状物質（PM2.5）などが健康や生態系に影響を与えています³。また、プラスチックごみやマイクロプラスチックなどの海洋汚染も深刻な問題となっています⁴。日本は、循環型社会の実現や廃棄物の削減・リサイクルなどを進める必要があります⁵。
                        </li>
                        <br />
                        <li>
                            - 生物多様性保全対策。日本は、世界有数の生物多様性を持つ国ですが、その多くが絶滅危惧種となっています。生物多様性の喪失は、自然災害からの防御力や食料・水・医薬品などの生活基盤を損なうだけでなく、文化や伝統も失われることを意味します。日本は、国立公園や自然保護区などの自然環境の保全や管理、外来種や違法伐採などの防止、地域住民や企業との協働などを推進する必要があります。
                        </li>
                      </ol>
                      <br />
                      <br />
                        <p>以上が日本の現在の環境問題についての解説です。これらの環境問題は日本だけでなく世界共通のものであり、国際的な協力や連携が不可欠です。私たちは環境問題に対する理解と関心を深めるとともに、自分たちにできることから行動していくことが大切です。.</p>
                        <br />
                        <br />
                      <ol >
                        <li>
                          (1) 環境省へようこそ！. https://www.env.go.jp/.
                        </li>
                        <li className=''>
                          
                          (2) 我が国の地球温暖化対策に関する最近の動向 - 経済産業省. 
                          <p className=' sm:text-sm'>https://www.meti.go.jp/shingikai/sankoshin/sangyo_gijutsu/chikyu_kankyo/pdf/2022_001_03_00.pdf.</p>
                        </li>
                        <li>
                          (3) 日本の環境問題の現状を知ろう。子どもたちの未来のために .... 
                          <p className='sm:text-sm'>https://bing.com/search?q=%e6%97%a5%e6%9c%ac%e3%81%ae%e7%92%b0%e5%a2%83%e5%95%8f%e9%a1%8c.</p>
                        </li>
                        <li>
                          (4) 危機的だと思う日本の環境問題、断トツで1位になったのは .... https://dime.jp/genre/996228/.
                        </li>
                        <li>
                          (5) 日本の現状｜地球温暖化｜独立行政法人環境再生保全機構. https://www.erca.go.jp/erca/ondanka/japan/index.html.
                        </li>
                      </ol>
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
                    <Link href={'/blogs/Blog7'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 sm:px-10 sm:mx-10 px-4 py-0 my-0    rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50 sm:px-10 px-2 py-0 my-0 '>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 sm:mx-5 py-0 my-0 px-3 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
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

export default Blog8
