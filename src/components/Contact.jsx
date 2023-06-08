import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

const Contact = () => {
  return (
    <div>
      <div className='w-[87.5%] grid py-8 md:py-20 grid-cols-4 relative sm:gap-2 gap-1 md:gap-10  mt-20 lg:min-h-screen  m-auto'>
          <div className='col-span-1  flex items-end '>
           <div className=''>
           <img className='rounded-t-full border md:border-2 border-white' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df66109e8d11d_Group%20427319906.webp" alt="" />
           </div>
          </div>
          <div className='col-span-2 flex items-end justify-center h-full '>
            <img className='h-[80%] border md:border-2 border-white ' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df66160e8d138_Img2%20(1).webp" alt="" />
          </div>
          <div className='col-span-1 '>
            <img className='rounded-t-full   border md:border-2 border-white' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df66a3ae8d11e_Group%20427319907.webp" alt="" />
            <div className='flex md:border-b-2 md:border-r-2 md:border-l-2 border-white border  border-t-0 p-1 md:p-2 md:p-4 text-white justify-between items-center'>
              <p className=' text-[6px]  sm:text-[12px] md:text-sm lg:text-md'>Exclusive</p>
              <CgArrowLongRight className=' text-md cursor-pointer  md:text-xl lg:text-2xl text-[#999] hover:scale-110 duration-200'/>
            </div>
            <div className='flex text-white mt-6  md:mt-14 lg:mt-20 items-center text-[0.3rem] sm:text-[0.5rem] md:text-[0.8rem]  lg:text-[1.06rem] md:gap-6 gap-3 '>
                  <div className=' w-[20px] sm:w-[40px] md:w-[60px] h-[1px] bg-white'/>
                  <h2 className='uppercase '>discover new <br /> collection ss'20</h2>
                </div>
          </div>
          <div className='absolute max-w-[200px]  md:max-w-[300px] lg:max-w-[500px] left-0 top-0 '>
                <img className='w-full h-full' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df648dbe8d112_Ellipse%205988.webp" alt="" />
                <img className='absolute bottom-0 w-[5%]' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6ebb9e8d11b_Pearl%201.webp" alt="" />
                <div className='flex md:text-4xl sm:text-2xl text-lg lg:text-7xl md:gap-2 absolute md:right-0  text-white top-0 flex-col items-start '>
                  <p><span>STAY</span> <span className='text-[#a4765b]'>jewel</span></p>
                  <p className='flex '><img className='w-[6%]' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6af93e8d10f_Star.svg" alt="" /> <span  className='uppercase'>to get best</span></p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact