import Image from 'next/image'
// import sample from "../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pl-5">
      <div className=' relative w-screen h-screen bg-scroll' >
      <Image src='/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像'  layout="fill" objectFit="cover"  />
      </div>
      {/* <img src='../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像' /> */}
      <div className="  absolute z-10   items-center w-screen border-b-4  border-blue-900  font-mono text-sm lg:flex pr-0 mr-0" >
        <p className="fixed left-1  top-3 flex  w-full p-0 m-0  border-b border-r-4 border-blue-800 bg-gradient-to-b from-zinc-200 mb-0 pt-2 backdrop-blur-2xl  dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tickets to the future
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
        </div>
      </div>


      <div className=' absolute flex  h-screen w-screen'>
      
          <div className=" h-screen w-1/6 pl-0 ml-2 text-left  flex flex-col mr-0 border-r-8 border-blue-900">
        
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <h3 className={`mb-3 text-xl font-bold text-slate-50`}>
            Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
          
        

        
          <h3 className={`mb-3 text-xl font-bold text-slate-50`}>
            投稿一覧{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        

        
          <h3 className={`mb-3 text-xl font-bold text-slate-50`}>
            他のジャンル{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        

        
          <h3 className={`mb-3 text-xl font-bold text-slate-50`}>
            お問い合わせ{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        
          </div>
      
          <div className='flex flex-col w-screen' >
            <div className="   justify-center pl-0 ml-0 pt-0 font-extrabold border-t border-blue-900 text-4xl text-slate-50 ">
                <br></br>
                <br></br>
                <br></br>
                    最新の投稿一覧
                <br></br>
                <br></br>
                <br></br>
            <div className='flex  gap-48 pl-5 '>
            <p className=' text-xs text-orange-500'>投稿１</p>
            <p className=' text-xs text-orange-500'>投稿２</p>
            <p className=' text-xs text-orange-500'>投稿３</p>
            <p className=' text-xs text-orange-500'>投稿４</p>
            <p className=' text-xs text-orange-500'>投稿５</p>

              </div>
            </div>
        </div> 
      </div>  
      
    </main>
  )
}
