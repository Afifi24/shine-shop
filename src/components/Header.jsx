import React from 'react'

const Header = () => {
  return (
    <div className='w-[95%] m-auto min-h-screen '>
      <nav className='flex items-center py-10 z-50 justify-between '>
         <div className='flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-14'>
             <div className='cursor-pointer'>
              <img className=' w-5 md:w-11 lg:w-13' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6398ee8d10a_Union.svg" alt="" />
             </div>
             <div className='flex items-center text-[6px] sm:text-[12px] md:text-md lg:text-[16px] gap-2 md:gap-3  lg:gap-6'>
                  <a className='uppercase text-white' href="#">shop</a>
                  <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                  <a className='uppercase text-white' href="#">lookbook</a>
                  <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                  <a className='uppercase text-white' href="#">journal</a>

             </div>
         </div>
         <div className='flex items-center   text-[6px] sm:text-[12px] md:text-md lg:text-[16px]  gap-2 md:gap-3 lg:gap-6'>
                  <a className='uppercase text-white' href="#">search</a>
                   <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                  <a className='uppercase text-white' href="#">cart(o)</a>
         </div>
      </nav>
        <div className='flex  items-center gap-32'>
             <div className='flex flex-1 relative text-white flex-col '>
                <h1  className='font-Titillium text-[5.6rem] mx-12 leading-[95px]'>
                  <span className='uppercase'>create</span> 
                  <br />
                  <span className='text-[#a4765b]'>your own</span>
                  <br />
                  <span className='uppercase mt-2'>
                    <strong className='star  w-20 h-20 '></strong>
                    history
                    </span>
                </h1>
                <div className='-mt-20 relative'>
                <img className='w-full h-full' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df648dbe8d112_Ellipse%205988.webp" alt="" />
                <img className='absolute right-[20%] top-[38%] w-20' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df60c3de8d113_Group%20427319904.webp" alt="" />
                <img className='absolute w-36  left-[14%] -bottom-6' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df62880e8d111_Group%20427319903%20(1).webp" alt="" />
                </div>
                <div className='flex items-center gap-6 right-20 -bottom-5 absolute'>
                  <div className='w-[60px] h-[1px] bg-white'/>
                  <h2 className='uppercase'>discover new <br /> collection ss'20</h2>
                </div>
                
             </div>
             <div className='flex-1'>
                <img className='rounded-t-full border-4 border-white' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df60ac7e8d115_Rectangle%2039195.webp" alt="" />
               <div className='flex py-4 px-6 border-r-4 border-l-4  border-white items-center justify-between'>
               <img className='imgbg w-[30%]' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df68872e8d121_Logo.svg"  alt="" />
               <div className='circle w-[6rem] relative h-[3.75rem]'>
               <svg className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " width="1.875rem" viewBox="0 0 30 6" fill="white" xmlns="http://www.w3.org/2000/svg">
               <path d="M30 2.99805L25 0.111298L25 5.8848L30 2.99805ZM-4.37114e-08 3.49805L25.5 3.49805L25.5 2.49805L4.37114e-08 2.49805L-4.37114e-08 3.49805Z" fill="white"></path>
                     </svg>
               </div>
               </div>
               <div className='flex  py-4 px-6  border-4  text-white text-[.8125rem] textcolor border-white items-center justify-between '>
                  <p>Polished pearls with vintage flair. Cultured freshwater pearls suspended from a timeless gold setting.</p>
                  <p>Add to your look with some vintage inspired sapphire bands or a second station bracelet with diamonds and pearls.</p>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Header