import { createContext, useEffect, useState } from "react";
import axios from "axios"

 export const Context=createContext()

const ContextApi=({children})=>{
    const[food,setfood]=useState([])
    
    let fetching= async()=>{
        let{data}=await axios.get("http://localhost:3000/menu")
        setfood(data)
        
    }
    useEffect(()=>{
        fetching()
    })




    const[search,setsearch]=useState("")

    let handlechange=(e)=>{
        setsearch(e.target.value)
    }
    
    const filteredFoods = food.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <Context.Provider value={{foods:filteredFoods,handlechange,search}}>
            {children}
        </Context.Provider>
    )
}

export default ContextApi