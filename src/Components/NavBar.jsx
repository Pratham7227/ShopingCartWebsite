import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({cartArray}) => {
    const navigate=useNavigate()
  return (
    <>
         <div className="flex justify-between item-center p-5 sticky top-0 bg-white shadow-md mb-5 z-50">
         <p className={`text-yellow-500 absolute right-5 top-2 font-bold  z-50 bg-white rounded-full w-[30px] text-center ${cartArray.length > 0 ? 'blink' : ''}`}>
        {cartArray.length}
         </p> 
               <h1 className="text-center text-3xl md:text-4xl font-bold  text-gray-800 cursor-pointer" onClick={()=>navigate('/')}>
                 List Of Products
               </h1>
               <FaCartShopping className="text-4xl" onClick={()=>navigate('/cart')}/>
        </div> 
    </>
  )
}
