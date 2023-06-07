import React from 'react'

const Hero = () => {
  return (
    // -mt-36 sm:mt-4 
    // lg:h-screen
    <div className='mt-10'>
    <div className=' w-[87.5%] p-[1px] max-h-screen lg:h-screen  bg-white  m-auto'>
        <div id='video' className=' lg:max-h-[80%] relative overflow-hidden  '>
          
           <video className=' ' autoPlay loop>
            <source className='h-full w-full' src='https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdfefaf501f87cea63773c_old_gold_jewelry_and_watches_7617mov (720p)-transcode.mp4' />
           </video>
           <h1 className='text-white text-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-[2rem] md:text-[4rem] lg:text-[5.6rem] uppercase  z-50'>play reel</h1>
        </div>
        <div className=' px-4 lg:px-12 flex py-6  items-center justify-between '>
          <p className=' max-w-[150px] sm:max-w-[200px] md:max-w-[300px] text-[8px] sm:text-[10px] md:text-[16px] '>SS’20 Collection is a super-limited type of jewelry. Each item makes purely individual with personal preferences.</p>
         
         <div className='text-center flex items-center justify-center'><img className=' w-4 sm:w-6 md:w-8 lg:w-full' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6fcf4e8d119_Star%20big.svg" alt="" /></div>
          
        </div>
    </div>

    </div>
  )
}

export default Hero