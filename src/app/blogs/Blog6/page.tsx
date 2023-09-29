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
              <div className=' text-orange-500 text-left font-bold  text-4xl'>
                <p>人工知能に人間がよく抱える悩みを５つあげてみて。</p>
                
                <p>と、質問してみた</p>
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 text-xl h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
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
                            <li>
                                (1) The 10 Most Common Life Problems and How to Deal with Them. https://theinternationalpsychologyclinic.com/the-10-most-common-life-problems-and-how-to-deal-with-them/.
                            </li>
                            <li>
                                (2) Most Problems Are People Problems | Psychology Today. https://www.psychologytoday.com/us/blog/toward-less-egoic-world/201706/most-problems-are-people-problems.
                            </li>
                            <li>
                                (3) 70 Everyday Problems That We All Know And Hate .... https://www.awesomeinventions.com/everyday-problems/.
                            </li>
                        </ol>
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
                    <Link href={'/blogs/Blog5'} className=' z-10 text-4xl text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 px-10 mx-10  rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 text-4xl text-slate-50 px-10'>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 px-10 mx-5 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog7'} className=' z-10 text-4xl text-slate-50'>
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
