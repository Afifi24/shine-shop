import React,{useContext} from 'react'
import {channeldata} from '../data'
import {CartContext} from './Context'
const Channel = () => {
  const {id,bigimg,smalling,desc,Next,Prev,index} = useContext(CartContext)
  return (
    <div className='mt-12'>
      <div className='flex flex-col sm:flex-row  items-center md:h-[80%]  lg:h-screen bg-white'>
         <div className='flex-1 sm:py-1  h-full'>
            <img className='w-full h-full object-cover' src={bigimg} alt={desc} />
         </div>
         <div className='flex-1 p-2 relative flex-col h-full flex items-center justify-center'>
         <div className='top-10 flex flex-col items-center justify-center absolute right-4'>
           <img className='' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6fcf4e8d119_Star%20big.svg" alt="" />
           <img className='w-6 mr-10' src="https://assets.website-files.com/62fdecbc519df619cde8d0f1/62fdecbc519df6fcf4e8d119_Star%20big.svg" alt="" />
           </div>
             <div className='w-1/2 flex items-center justify-center'>
             <img className=' sm:h-[80%] rounded-t-full  object-cover' src={smalling} alt={desc} />
             </div>
             <div>
                 <p className=' md:text-[1rem] pt-10 md:pt-0 lg:text-[2rem] h-[20vh] text-center  max-w-[400px]'>{desc}</p>
             </div>
             <div className='flex w-full items-center  px-10 lg:mt-4 justify-between'>
                <button onClick={Prev} className='bg-black hover:text-black hover:bg-transparent duration-300 border border-transparent hover:border-black py-1 px-2 sm:text-[10px] md:text-sm lg:text-md  md:py-2 md:px-3 text-white'>Prev</button>
                <div className='h-[0.75px] md:h-[1px] bg-black w-[30px] md:w-[40px] lg:w-[60px]'/>
                <p><span className='font-bold'>{index+1}</span>/3</p>
                <div className='h-[0.75px] md:h-[1px] bg-black w-[30px] md:w-[40px] lg:w-[60px]'/>
                <button onClick={Next} className='bg-black hover:text-black hover:bg-transparent duration-300 border border-transparent hover:border-black  py-1 px-2 sm:text-[10px] md:text-sm lg:text-md   md:py-2 md:px-3 text-white'>Next</button>
                
             </div>
         </div>
      </div>

    </div>
  )
}

export default Channel