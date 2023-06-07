import React,{createContext,useState} from "react";
import {channeldata} from '../data'
export const CartContext = createContext()

const WraperContext = ({children})=>{
    const [index,setIndex] = useState(1)
    const {id,bigimg,smalling,desc} = channeldata[index]
    const Next = ()=>{
        setIndex(index + 1)
        if(index>=channeldata.length-1){
            setIndex(0)
        }
    }
    const Prev = ()=>{
        setIndex(index - 1)
        if(index<=0){
            setIndex(channeldata.length-1)
        }
    }
       return(
        <CartContext.Provider value={{id,bigimg,index,smalling,desc,Next,Prev}} >
            {children}
        </CartContext.Provider >
       )
}

export default WraperContext