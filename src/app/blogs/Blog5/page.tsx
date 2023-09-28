import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog5() {
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
                人工知能に人間の健康維持に必要なことを聞いてみた
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 text-xl h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
                    <p>人工知能に人間が健康を維持するために必要なことを5つの項目に分けて説明して。と、お願いしてみた結果を記載します。</p>
                    <br />
                    <p>
                    人間の健康維持に実施すべきことを５つの項目に分けて、以下のように解説します。
<br />
<br />
<ol>
  <li>
    1. 健康的な食事をとること。ビタミン、ミネラル、食物繊維などの栄養素を十分に摂取するために、果物、野菜、豆類、ナッツ、全粒穀物などの様々な食品をバランスよく食べることが大切です¹。特に、成人は一日に少なくとも５皿（400g）の果物と野菜を食べることが推奨されています¹。また、塩分や糖分の摂取量を適度に抑えることも重要です¹。健康的な食事をすることで、栄養不足や生活習慣病（糖尿病、心臓病、脳卒中、がんなど）のリスクを減らすことができます。
  </li>
  <br />
  <li>
    2. 十分な水分を摂ること。水は人間の体にとって不可欠な要素であり、水分不足は肌や髪、爪、臓器、そして精神にも悪影響を及ぼします²。また、水分補給は体重管理にも効果的です²。水はカロリーがゼロであり、満腹感を与えることで食欲を抑えることができます²。さらに、冷たい水を飲むことで代謝が上がり、消費カロリーも増えます²。一般的には、成人は一日に約２リットル（８カップ）の水分を摂ることが望ましいとされています²。
  </li>
  <br />
  <li>
    3. 適度な運動をすること。運動は心肺機能や筋力、柔軟性、バランス感覚などの身体能力を向上させるだけでなく、ストレスの解消や気分の改善にも役立ちます³。また、運動は生活習慣病の予防や治療にも有効です³。WHOは成人に対して、一週間に少なくとも150分の中強度の有酸素運動か75分の高強度の有酸素運動を行うことを勧めています³。有酸素運動とは、歩く、走る、自転車に乗るなどの心拍数や呼吸数が上がる運動のことです³。

  </li>
  <br />
  <li>
    4. 睡眠の質と量を確保すること。睡眠は人間の体と心の回復に欠かせないプロセスです。睡眠不足は集中力や記憶力の低下、イライラやうつ気分、免疫力の低下などの問題を引き起こします。また、睡眠不足は肥満や生活習慣病のリスクを高めることもあります。成人は一日に約７～８時間の睡眠を取ることが理想的です。睡眠の質を高めるためには、就寝前にリラックスすること、カフェインやアルコールの摂取を控えること、寝室を暗くして静かにすることなどが有効です。

  </li>
  <br />
  <li>
    5. アルコールの過剰摂取を避けること。アルコールは人間の健康に悪影響を及ぼす物質です。アルコールの過剰摂取は精神や行動の障害、アルコール依存症、肝硬変やがんなどの重大な疾患、暴力や交通事故などの外傷の原因となります。アルコールには安全な摂取量はありません。健康を守るためには、アルコールの摂取を控えるか、少量にすることが必要です。

  </li>
</ol>
<br />
以上が人間の健康維持に実施すべきことの５つの項目です。これらのことを日常的に心がけることで、体と心の健康を保つことができます。健康は一朝一夕には築かれませんが、一生涯にわたって大切にすべきものです。自分自身の健康に責任を持ち、積極的に改善していきましょう。
<br />
<br />
<p>引用・参考</p>
<br />
<ol>
<li>
(1) 20 health tips for 2020 - World Health Organization (WHO). https://www.who.int/philippines/news/feature-stories/detail/20-health-tips-for-2020.
</li>  
<li>
  <br />
(2) How to Maintain Your Health (with Pictures) - wikiHow. https://www.wikihow.com/Maintain-Your-Health.

</li>
<br />
<li>
(3) Adult health Maintaining good health - Mayo Clinic. https://www.mayoclinic.org/healthy-lifestyle/adult-health/basics/staying-healthy/hlv-20049421.
<br />
</li>
</ol>
<br />
                    </p>
                   
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
                    <Link href={'/blogs/Blog4'} className=' z-10 text-4xl text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 px-10 mx-10  rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 text-4xl text-slate-50 px-10'>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 px-10 mx-5 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog6'} className=' z-10 text-4xl text-slate-50'>
                      次の記事
                    </Link>
                  </button> 
          </div>     
            </div>
          </div>
        </div>
        
        
        
        
  )
}

export default Blog5