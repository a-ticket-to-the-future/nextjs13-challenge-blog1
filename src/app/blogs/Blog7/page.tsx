import { Home } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog7 = () => {
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
              <div className=' text-orange-500 text-left font-bold  sm:text-4xl text-xl'>
                <p>人工知能に現在の日本の経済状況について</p>
                <p>簡潔に解説して。</p>
                <p>と、お願いしてみた</p>
              </div>
                <br />
                <br />
                <br />
                <div className=' flex  '>
                  <div className=' w-3/4 sm:text-xl text-xs h-300 text-blue-700 font-semibold overflow-wrap break-word border-4 border-blue-700 p-5 '>
                  <h1>日本の現在の経済状況について、以下のように解説します。</h1>
                    <br />
                    <br />
                      <p>日本の経済は、新型コロナウイルスの感染拡大による緊急事態宣言やまん延防止等重点措置の影響で、2021年上半期は停滞が続きました。2021年4-6月期の実質国内総生産（GDP）は、前期比年率で1.9％増となりましたが、これは前期の4.2％減からの反動的な回復に過ぎず、消費や設備投資などの内需は依然として低迷しています¹。また、世界的なエネルギーや食料価格の高騰や半導体不足などの供給面の制約も日本経済にとってマイナス要因となっています²。</p>
                      <br />
                      <br />
                      <p>一方で、日本経済にはプラス要因もあります。まず、ワクチン接種の進展により、感染症対策と社会経済活動の両立が可能になりつつあります³。政府は10月22日に全国的な緊急事態宣言を解除し、飲食店やイベント会場などでの時間制限や入場制限を緩和しました³。これにより、個人消費やサービス業などが回復することが期待されます³。次に、政府は「物価高克服・経済再生実現のための総合経済対策」を策定し、令和4年度第2次補正予算や令和5年度当初予算を迅速かつ着実に執行することで、民需主導で持続可能な成長を目指しています²。この対策では、「人への投資」や成長分野への投資、「攻めの投資」などを重点分野として掲げており、計画的で大胆な投資を官民連携で推進することで、新しい資本主義の旗印の下で社会課題の解決に向けた取り組みを成長のエンジンへと転換することを目指しています²。さらに、海外経済は一部地域では弱さが見られるものの、米国や中国など主要国では持ち直し傾向が続いており、日本の輸出や製造業にとってはプラス要因となっています²。</p>
                      <br />
                      <br />
                      <br />
                      <p>以上のように、日本経済はコロナ禍からの回復基調にあるものの、不確実性やリスクも依然として高い状況です。政府は今後も経済情勢を注視しながら、必要な政策対応を躊躇なく行っていくことが重要です。</p>
                      <br />
                      <br />
                      <ol>
                        <li>
                          (1) 国内景気「緩やかに回復」 3カ月連続、7月の月例報告 - 日本 .... https://www.nikkei.com/article/DGXZQOUA2542M0V20C23A7000000/.
                        </li>
                        <li>
                          (2) 特集 令和5年度政府経済見通しについて : 財務省. https://www.mof.go.jp/public_relations/finance/202302/202302h.html.
                        </li>
                        <li>
                          (3) わが国経済の足元の状況と今後の見通し (2021年10月7日 No .... https://www.keidanren.or.jp/journal/times/2021/1007_09.html.
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
                    <Link href={'/blogs/Blog6'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
                      前の記事
                    </Link>
                  </button>
                  <button type='button' className=' z-10 bg-blue-400 sm:px-10 sm:mx-10 px-4 py-0 my-0    rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/'} className=' z-10 sm:text-4xl text-xs text-slate-50 sm:px-10 px-2 py-0 my-0 '>
                      <Home fontSize='large' />
                    </Link>
                  </button>
                  
                   
                  
                  <button type='button' className=' z-10 bg-pink-300 sm:px-10 sm:mx-5 py-0 my-0 px-3 rounded-lg hover:scale-105 active:scale-95'>
                    <Link href={'/blogs/Blog8'} className=' z-10 sm:text-4xl text-xs text-slate-50'>
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

export default Blog7
