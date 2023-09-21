import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   pl-5">
      <div className="z-10 max-w-5xl w-full items-center  font-mono text-sm lg:flex">
        <p className="fixed left-1  top-3 flex  w-full  border-b mb-5 border-gray-300 bg-gradient-to-b from-zinc-200 pb-0 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A ticket to the future
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
        </div>
      </div>


      <div className='flex'>
      <div className=" w-1/6 mb-32 flex flex-col  lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <h3 className={`mb-3 text-base font-normal`}>
            Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
          
        

        
          <h3 className={`mb-3 text-base font-normal`}>
            投稿一覧{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        

        
          <h3 className={`mb-3 text-base font-normal`}>
            その他のジャンル{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        

        
          <h3 className={`mb-3 text-base font-normal`}>
            お問い合わせ{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h3>
          
        
      </div>
      
      <div className=" w-5/6  relative flex justify-center font-bold border-l border-red-500 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-3xl">
        <br></br>
        <br></br>
        長いタイトルにすればもしかして大丈夫？
      </div>

      {/* <div className=" mb-32 flex flex-col lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:col-span-1 lg:fixed lg:h-screen">
        
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Home{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      

      
        <h2 className={`mb-3 text-2xl font-semibold`}>
          投稿一覧{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      

      
        <h2 className={`mb-3 text-2xl font-semibold`}>
          その他のジャンル{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore the Next.js 13 playground.
        </p>
      

      
        <h2 className={`mb-3 text-2xl font-semibold`}>
          お問い合わせ{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      
    </div> */}
      </div>
    </main>
  )
}
