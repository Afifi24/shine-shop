import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 pb-10'>

      <div className='w-[95%] grid grid-cols-7 p-1  m-auto min-h-[60vh] bg-white '>
        <div className='col-span-2 '></div>
        <div className='col-span-5 text-white bg-black flex items-center '>

          <div className='flex   w-full flex-1 flex-col gap-10'>
                <div className='flex w-full items-center justify-around'>
                     <ul className='flex flex-col gap-3'>
                      <li><a className='uppercase' href="">shop</a></li>
                      <li><a className='uppercase' href="">lookbook</a></li>
                      <li><a className='uppercase' href="">item num</a></li>
                     </ul>
                     <ul className='flex flex-col gap-3'>
                      <li><a className='uppercase' href="">jornal</a></li>
                      <li><a className='uppercase' href="">contacts</a></li>
                      <li><a className='uppercase' href="">item num</a></li>
                     </ul>
                </div>
                <div className='pl-16 space-y-2'>
                  <p>UA: +3 8096 272 2100</p>
                  <p className='uppercase'>mail@halo-lab.com</p>
                </div>
          </div>
          <div className='flex-1 space-y-10'>
              <h1 className='uppercase font-bold text-2xl'>newsletter</h1>
              <form className='flex  relative items-center'>
               <input className='uppercase w-[80%] outline-none border-[#555] border-b-2 bg-transparent' type="email" placeholder='email address' />
               <button className='absolute right-1/4  '>sent</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer