import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className=' mt-8 md:mt-28 pb-10'>

      <div className='w-[95%] grid grid-cols-7 p-[1px] lg:p-1  m-auto lg:min-h-[60vh] bg-white '>
        <div className='col-span-2 flex items-center justify-center flex-col gap-10 lg:gap-28 '>
          <div>
            <img className='w-14 sm:w-20 md:w-24 lg:w-48' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df68872e8d121_Logo.svg" alt="" />
          </div>
          <div className='flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4'>
            <img className='w-4 sm:w-6 md:w-10 lg:w-14 ' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df65159e8d122_Logo%20(1).svg" alt="" />
            <div>
              <p className='sm:text-sm text-[6px] md:text-md'>2023 halo-lab</p>
              <p className='sm:text-sm text-[6px] md:text-md'>&copy; All rights reserved</p>
            </div>
          </div>
        </div>
        <div className='col-span-5 text-white p-3 bg-black flex gap-6 items-center '>

          <div className='flex   w-full flex-1 flex-col lg:gap-10'>
                <div className='flex w-full items-center justify-around'>
                     <ul className='flex flex-col gap-0 md:gap-3'>
                      <li className=''><a className='uppercase sm:text-sm hover:text-[#999] duration-200 text-[6px] md:text-md' href="">shop</a></li>
                      <li><a className='uppercase sm:text-sm text-[6px] hover:text-[#999] duration-200  md:text-md' href="">lookbook</a></li>
                      <li><a className='uppercase sm:text-sm text-[6px] hover:text-[#999] duration-200  md:text-md' href="">item num</a></li>
                     </ul>
                     <ul className='flex flex-col gap-0 md:gap-3'>
                      <li><a className='uppercase sm:text-sm text-[6px] hover:text-[#999] duration-200 md:text-md' href="">jornal</a></li>
                      <li><a className='uppercase sm:text-sm text-[6px] hover:text-[#999] duration-200 md:text-md' href="">contacts</a></li>
                      <li><a className='uppercase sm:text-sm text-[6px] hover:text-[#999] duration-200 md:text-md' href="">item num</a></li>
                     </ul>
                </div>
                <div className='lg:pl-16 pl-4 text-[#999]  space-y-2'>
                  <p className='underline cursor-pointer hover:text-white duration-200 sm:text-sm text-[8px]   md:text-md'>UA: +3 8096 272 2100</p>
                  <p className='uppercase underline hover:text-white duration-200 cursor-pointer sm:text-sm   text-[8px] md:text-md '>mail@halo-lab.com</p>
                </div>
          </div>
          <div className='flex-1 space-y-10'>
              <h1 className='uppercase font-bold text-[10px] sm:text-lg md:text-xl lg:text-2xl'>newsletter</h1>
              <form className='flex  relative items-center'>
               <input required className='uppercase text-[6px] sm:text-sm md:text-md  w-[80%] py-2 outline-none border-[#999] focus:border-white  pr-8 md:pr-14 lg:pr-20 border-b-[1px] bg-transparent' type="email" placeholder='email address' />
               <button className='absolute right-1/4  '><CgArrowLongRight className=' text-md md:text-xl lg:text-2xl text-[#999] hover:scale-110 duration-200'/></button>
              </form>
              <div className='flex gap-2 sm:gap-2 md:gap-3 lg:gap-4 items-center  '>
                <a className='border-[1px] md:border-[2px] p-[0.5px] md:p-2 border-[#999] hover:border-white duration-200' href="#"><FaLinkedinIn className='text-[10px] md:text-sm'/></a>
                <a className='border-[1px] md:border-[2px] p-[0.5px] md:p-2 border-[#999] hover:border-white duration-200' href="#"><AiOutlineInstagram className='text-[10px] md:text-sm'/></a>
                <a className='border-[1px] md:border-[2px] p-[0.5px] md:p-2 border-[#999] hover:border-white duration-200' href="#"><FaFacebookF className='text-[10px] md:text-sm'/></a>
                <a className='border-[1px] md:border-[2px] p-[0.5px] md:p-2 border-[#999] hover:border-white duration-200' href="#"><FaPinterestP className='text-[10px] md:text-sm'/></a>
                <a className='border-[1px] md:border-[2px] p-[0.5px] md:p-2 border-[#999] hover:border-white duration-200' href="#"><AiOutlineTwitter className='text-[10px] md:text-sm'/></a>
            
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer