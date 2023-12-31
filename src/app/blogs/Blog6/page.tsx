import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog6 = () => {
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
              <div className=' text-orange-500 text-left font-bold  sm:text-4xl text:lg'>
                <p>人工知能に人間がよく抱える悩みを５つあげてみて。</p>
                
                <p>と、質問してみた</p>
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 sm:text-xl text-xs h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
                    <h1>人間がよく抱える悩みの種類について、以下のように５つの項目に分けて解説します。</h1>
                        <br />
                        <br />
                    
                        <ol>
                            <li>
                                1. 健康に関する悩み。人間は誰でも病気や怪我、老化などの健康問題に直面することがあります。健康に関する悩みは、身体的な苦痛や不快感だけでなく、精神的な不安や恐怖も引き起こします。健康に関する悩みを解決するためには、医師や専門家の診断や治療を受けることが大切です¹。また、日常生活で健康的な食事や運動、睡眠などを心がけることも重要です²。
                            </li>
                            <br />
                            <br />
                            <li>
                                   2. 人間関係に関する悩み。人間は社会的な動物であり、家族や友人、恋人、同僚などとさまざまな人間関係を築きます。しかし、人間関係は必ずしも円滑にいくとは限りません。相手との価値観や考え方の違い、コミュニケーションの不足や誤解、利害の衝突や対立などが原因で、人間関係にトラブルやストレスが生じることがあります³。人間関係に関する悩みを解決するためには、相手の立場や感情を尊重し、誠実かつ積極的に対話することが大切です³。
                           </li>
                           <br />
                           <br />
                            <li>
                                3. 仕事や学業に関する悩み。人間は自己実現や社会貢献のために仕事や学業に励みます。しかし、仕事や学業は必ずしも順調にいくとは限りません。能力や成果に対する自信の欠如、期待や要求に応えられない不安、時間や資源の不足、競争や評価のプレッシャーなどが原因で、仕事や学業に悩むことがあります。仕事や学業に関する悩みを解決するためには、自分の目標や価値観を明確にし、適切な計画や管理を行うことが大切です。
                            </li>
                            <br /> 
                            <br /> 
                            <li>
                                4. 経済的な悩み。人間は生活の質を向上させるために経済的な安定や豊かさを求めます。しかし、経済的な状況は必ずしも安定しているとは限りません。収入の減少や失業、借金や貯蓄の不足、物価の高騰や税金の負担などが原因で、経済的な悩みを抱えることがあります。経済的な悩みを解決するためには、収入を増やすための努力やスキルアップを行うことと、支出を抑えるための節約や予算管理を行うことが大切です。
                            </li>
                            <br />
                            <br />
                            <li>
                                5. 自己肯定感に関する悩み。人間は自分自身を肯定的に評価し、自信を持って生きることを望みます。しかし、自己肯定感は必ずしも高いとは限りません。自分の容姿や能力、性格や人生に対する不満や劣等感、他人との比較や批判などが原因で、自己肯定感に悩むことがあります。自己肯定感に関する悩みを解決するためには、自分の長所や強みを認識し、自分を受け入れることが大切です。また、自分を成長させるための挑戦や学習を行うことも重要です。
                            </li>
                        </ol>
                        <br />
                        <br />
                            <p>
                                以上が人間がよく抱える悩みの種類についての解説です。これらの悩みは誰でも経験するものであり、恥ずかしいことや弱いことではありません。悩みを抱えたときは、自分一人で抱え込まずに、信頼できる人に相談したり、専門家の助けを求めたりすることも大切です。悩みは解決できるものであり、悩みを乗り越えることで人生はより豊かになります。
                            </p>
                            <br />
                            <br />
                        <ol>
                            <li className='sm:text-xl text-xs overflow-wrap:break-word'>
                                (1) The 10 Most Common Life Problems and How to Deal with Them. 
                                <p className='sm:text-xl text-xs'>https://theinternationalpsychologyclinic.com/the-10-most-common-life-problems-and-how-to-deal-with-them/.</p>
                            </li>
                            <li>
                                (2) Most Problems Are People Problems | Psychology Today. https://www.psychologytoday.com/us/blog/toward-less-egoic-world/201706/most-problems-are-people-problems.
                            </li>
                            <li>
                                (3) 70 Everyday Problems That We All Know And Hate .... https://www.awesomeinventions.com/everyday-problems/.
                            </li>
                        </ol>
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
                    <Link href={'/blogs/Blog5'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 sm:px-10 sm:mx-10 px-4 py-0 my-0    rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50 sm:px-10 px-2 py-0 my-0 '>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 sm:mx-5 py-0 my-0 px-3 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog7'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
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

export default Blog6
