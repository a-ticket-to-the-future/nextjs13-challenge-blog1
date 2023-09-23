import Image from 'next/image'
import Sidebar from './components/Sidebar/Sidebar'
import Link from 'next/link'
// import sample from "../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* <div className=' relative w-screen h-screen bg-scroll border border-blue-900' >
      <Image src='/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像'  layout="fill" objectFit="cover"  />
      </div> */}
      {/* <img src='../../public/image/58FB877E-F671-4333-BFAE-5149AF5DF31C.jpeg' alt='画像' /> */}
      <div className="  absolute z-10   items-center w-screen border-b-4  border-blue-900  font-mono text-sm lg:flex pr-0 mr-0" >
        <p className="fixed left-1  top-3 flex  w-full pl-1  border-b-4 border-r-4 border-blue-800  mb-0 pt-2 font-bold pb-2 ">  
        {/* bg-gradient-to-b from-zinc-200 backdrop-blur-2xl  dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 */}
          A tickets to the future
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center ">
          {/* bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none */}
          
        </div>
      </div>


      <div className=' absolute flex  h-screen w-screen'>
      <Sidebar />
          
      
          <div className='flex flex-col w-screen' >
            <div className="   justify-center pl-0 ml-0 pt-0 font-extrabold border-t border-blue-900 text-4xl text-slate-50 ">
                <br></br>
                <br></br>
                <br></br>
                    最新の投稿一覧
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className='flex gap-32 pl-1 pr-5 '>
              {/*  */}
              <div>
                <Link href={'/blogs/Blog1'} className=' text-orange-500 text-xs w-167 h-146 cursor-pointer '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        
                         />
                    
                    {/* <br></br> */}
                   投稿１
                   
                </Link>     
                   
                
                </div>
                <Link href={'/blogs/Blog2'} className=' text-orange-500 text-xs w-167 h-146 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        
                         />
                    
                         <br></br>
                   投稿２
                   
                </Link>
                <Link href={'/blogs/Blog3'} className=' text-orange-500 text-xs w-167 h-146 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        
                         />
                    
                         <br></br>
                   投稿３
                   
                </Link>
                <Link href={'/blogs/Blog4'} className=' text-orange-500 text-xs w-167 h-146 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        
                         />
                    
                         <br></br>
                   投稿４
                   
                </Link>
                <Link href={'/blogs/Blog5'} className=' text-orange-500 text-xs w-167 h-146 '>
                     
                      <Image 
                        
                        src='/image/flowers-7242099_640.jpg' 
                        alt='image' 
                        width={167}
                        height={146}
                        
                         />
                    
                         <br></br>
                   投稿５
                   
                </Link>
                {/* <Link href={'/blogs/Blog2'} className=' text-orange-500 text-xs'>
                   投稿２
                </Link>
                <Link href={'/blogs/Blog3'} className=' text-orange-500 text-xs'>
                   投稿３
                </Link>
                <Link href={'/blogs/Blog4'} className=' text-orange-500 text-xs'>
                   投稿４
                </Link>
                <Link href={'/blogs/Blog5'} className=' text-orange-500 text-xs'>
                   投稿５
                </Link> */}
              
                {/* <Blog2 />
                <Blog3 />
                <Blog4 />
                <Blog5 /> */}

              </div>
            </div>
        </div> 
      </div>  
      
    </main>
  )
}
