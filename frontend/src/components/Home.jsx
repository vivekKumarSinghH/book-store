import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../redux/features/bookSlice'

export default function Home() {

    const  dispatch=useDispatch()
    const { books}=useSelector((state)=>state.book)
    // console.log(books)
    useEffect(()=>{
        dispatch(getBooks())
    },[])
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] md:w-[70%] gap-4 p-4 m-auto">
    {
        books.map((ele)=>{
           return <div key={ele._id}
           className="rounded-lg shadow-lg h-[250px] md:h-[300px]"
           >
   <img src={ele.poster} className="rounded-t-lg  w-full h-[60%]"/>
   
   <p >{ele.title}</p>

   <div> <span>₹{ele.price-Math.floor((ele.discount*ele.price)/100)}</span> <span>₹{ele.price}</span></div>
         
   </div>

        })
    }
  
    
    </div>
  )
}
