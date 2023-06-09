import React from 'react'
import {motion} from 'framer-motion'
const Header = () => {
  return (
    <div className='w-[95%] m-auto  '>
      <nav className='flex items-center py-4 lg:py-14 relative z-50 justify-between '>
         <div className='flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-14'>
             <div className='cursor-pointer'>
              <img className=' w-5 md:w-11 lg:w-13' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6398ee8d10a_Union.svg" alt="" />
             </div>
             <div className='flex items-center text-[6px] sm:text-[12px] md:text-md lg:text-[16px] gap-2 md:gap-3  lg:gap-6'>
                  <div className=' h-3 flex group items-center overflow-hidden  '>
                  <div className='flex flex-col gap-2 duration-500 translate-y-2 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 sm:translate-y-3  md:group-hover:-translate-y-3  md:translate-y-3 lg:group-hover:-translate-y-4  lg:translate-y-4'>
                  <a className='uppercase text-white' href="#">shop</a>
                  <a className='uppercase text-white' href="#">shop</a>
                  </div>
                  </div>
                  <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                  <div className=' h-3 flex group items-center overflow-hidden  '>
                  <div className='flex flex-col gap-2 duration-500 translate-y-2 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 sm:translate-y-3  md:group-hover:-translate-y-3  md:translate-y-3 lg:group-hover:-translate-y-4  lg:translate-y-4'>
                  <a className='uppercase text-white' href="#">lookbook</a>
                  <a className='uppercase text-white' href="#">lookbook</a>
                  </div>
                  </div>
                  <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                  <div className=' h-3 flex group items-center overflow-hidden  '>
                  <div className='flex flex-col gap-2 duration-500 translate-y-2 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 sm:translate-y-3  md:group-hover:-translate-y-3  md:translate-y-3 lg:group-hover:-translate-y-4  lg:translate-y-4'>
                  <a className='uppercase text-white' href="#">journal</a>
                  <a className='uppercase text-white' href="#">journal</a>
                  </div>
                  </div>

             </div>
         </div>
         <div className='flex items-center   text-[6px] sm:text-[12px] md:text-md lg:text-[16px]  gap-2 md:gap-3 lg:gap-6'>
                  <div className=' h-3 flex group items-center overflow-hidden  '>
                  <div className='flex flex-col gap-2 duration-500 translate-y-2 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 sm:translate-y-3  md:group-hover:-translate-y-3  md:translate-y-3 lg:group-hover:-translate-y-4  lg:translate-y-4'>
                  <a className='uppercase text-white' href="#">search</a>
                  <a className='uppercase text-white' href="#">search</a>
                  </div>
                  </div>
                 <div className='h-[0.75px] md:h-[1px] bg-white w-[30px] md:w-[40px] lg:w-[60px]'/>
                 <div className=' h-3 flex group items-center overflow-hidden  '>
                  <div className='flex flex-col gap-2 duration-500 translate-y-2 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 sm:translate-y-3  md:group-hover:-translate-y-3  md:translate-y-3 lg:group-hover:-translate-y-4  lg:translate-y-4'>
                  <a className='uppercase text-white' href="#">cart(o)</a>
                  <a className='uppercase text-white' href="#">cart(o)</a>
                  </div>
                  </div>
         </div>
      </nav>
        <div className='flex lg:-mt-32 gap-10 sm:gap-10  items-center md:gap-12 lg:gap-32'>
             <div className='flex flex-1 relative text-white flex-col '>
                <h1  className='font-Titillium sm:text-[2rem] md:text-[4rem] lg:text-[5.6rem] mx-6 sm:mx-12 lg:leading-[95px]'>
                  <span className='uppercase'>create</span> 
                  <br />
                  <span className='text-[#a4765b]'>your own</span>
                  <br />
                  <span className='uppercase  ml-2 sm:ml-0 '>
                    {/* <strong className='star hidden lg:inline-block  w-20 h-20 '></strong> */}
                    history
                    </span>
                </h1>
                <div className='lg:-mt-20 relative'>
                <img className='w-full h-full' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df648dbe8d112_Ellipse%205988.webp" alt="" />
                <img className='absolute right-[20%] top-[38%] max-w-[16%]' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df60c3de8d113_Group%20427319904.webp" alt="" />
                
                <img className='absolute max-w-[30%]   left-[14%] -bottom-1 sm:-bottom-6' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df62880e8d111_Group%20427319903%20(1).webp" alt="" />
                </div>
                <div className='flex group  items-center text-[0.3rem] sm:text-[0.5rem] md:text-[0.8rem]  lg:text-[1.06rem] md:gap-6 gap-3 right-0 lg:right-10 -bottom-5 absolute'>
                 <div  className=' cursor-pointer  md:w-[60px] sm:w-[40px] w-[20px]   group-hover:w-[0px] duration-500  h-[1px] bg-white'/>
                
                        <div className='cursor-pointer'>
                        <h2 className='uppercase '>discover new <br /> collection ss'20</h2>
                        <div className='w-0 group-hover:w-full duration-500 h-[1px] bg-white' />
                        </div>
               
                </div>
             </div>
             <div className='flex-1 mr-6 lg:mr-12'>
              <div className='w-full relative'>  <img className='rounded-t-full border md:border-2 border-white' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df60ac7e8d115_Rectangle%2039195.webp" alt="" />
              <div className='absolute top-1 left-1/2 -translate-x-1/2'>
                <strong className='star hidden lg:inline-block h-4   lg:h-8 '></strong>
              </div>
              </div>
               <div className='flex  py-0 sm:py-1 md:py-1 lg:py-4 px-6 border-r border-l md:border-r-2 md:border-l-2  border-white items-center justify-between'>
               <div className=''><img className='imgbg max-w-[40%] lg:max-w-[70%]' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df68872e8d121_Logo.svg"  alt="" /></div>
               <div className='circle w-[6rem] relative h-[2rem] sm:h-[3.75rem]'>
               <svg className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " width="1.875rem" viewBox="0 0 30 6" fill="white" xmlns="http://www.w3.org/2000/svg">
               <path d="M30 2.99805L25 0.111298L25 5.8848L30 2.99805ZM-4.37114e-08 3.49805L25.5 3.49805L25.5 2.49805L4.37114e-08 2.49805L-4.37114e-08 3.49805Z" fill="white"></path>
                     </svg>
               </div>
               </div>
               <div className='flex  gap-6 py-2 px-3 sm:py-2 sm:px-4  md:py-4 md:px-6 border md:border-2  text-white text-[0.2rem] sm:text-[0.4rem] md:text-[0.5rem] lg:text-[.8125rem] textcolor border-white items-start lg:justify-between '>
                  <p>Polished pearls with vintage flair. Cultured freshwater pearls suspended from a timeless gold setting.</p>
                  <p>Add to your look with some vintage inspired sapphire bands or a second station bracelet with diamonds and pearls.</p>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Header