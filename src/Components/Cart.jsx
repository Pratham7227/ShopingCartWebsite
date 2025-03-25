import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import { MdOutlineClear } from "react-icons/md";
import { ImBin2 } from "react-icons/im";

export const Cart = ({cartArray,setCartArray}) => {
   const [cart,setCart]=useState([]);
   const [sumOfItems,setSumOfItems]=useState(0);
  //  console.log("CartArray >>>>",cartArray);

    function calCulatevalue(){
      const array= cart.map((singleProduct)=>{
        return singleProduct.price
      })
      
      const array2= cart.map((singleProduct)=>{
        return {price:singleProduct.price,quantity:singleProduct.quantity}
      })
      console.log("Array of price::",array2);
       
      const newArray=array2.map((singleElement)=>{
          if(singleElement.quantity>=2){
            let value=singleElement.price*singleElement.quantity;
            return value
          }else{
            return singleElement.price
          }
      })
      console.log("singleArrayOfPrice",newArray);
      
      
      
      const sumOfItems=newArray.reduce((acc,currentValue)=>acc+currentValue,0);
      return sumOfItems;
    }
    function handleCart(){
      
      const addQauntityToArray=cartArray.map((singleProduct)=>{
        return {
          ...singleProduct,quantity:0    
        }
        })

    const hashMap=new Map();

    addQauntityToArray.forEach((singleProduct)=>{
         if(hashMap.has(singleProduct.id)){
             const modifyObject=hashMap.get(singleProduct.id);
             modifyObject.quantity+=1;
             hashMap.set(singleProduct.id,modifyObject);
         }else{    
            hashMap.set(singleProduct.id, { ...singleProduct, quantity: 1 });
        }
    })
    
    let uniqueValues=Array.from(hashMap.values())
     return uniqueValues        
    }
    
    useEffect(()=>{       
      const upDatedArray=handleCart();
      setCart(upDatedArray);
    },[])

    useEffect(()=>{
      // console.log("setting value :::");
      const sum= calCulatevalue();
      // console.log("ans from function::",sum);
      
      setSumOfItems(sum);
      // console.log("state ans___",sumOfItems);
      
    },[cart.length])

    // console.log("Full Modify array",uniqueValues);

    function removeProductFromCart(id){
       let upDatedArray=cart.filter((eachProduct)=>eachProduct.id!==id);
      // console.log("updated Array:",upDatedArray);
       setCart(upDatedArray);
       setCartArray(upDatedArray)
    }
    function clearCart(){
      setCartArray([]);
      setCart([])
    }

  return (
    <div className='flex flex-col gap-5 p-5'>
       <div className='flex gap-3 flex-col md:flex-row md:items-center justify-between  shadow-md p-4'>
       <div className='flex md:items-center gap-3 md:flex-row flex-col '>
       <p className='text-2xl p-2'>TotalItems:<spna className="text-green-500 ml-2">{cart.length}</spna></p>
       <p className='text-2xl p-2'>TotalItemsValue:<span className="text-green-500 ml-2">${sumOfItems.toFixed(2)}</span></p>
       <p className='bg-yellow-200 p-2 w-[25px] h-[25px] rounded-full hidden md:visible'></p><span className='italic hidden md:visible'>quantity</span>
       </div>
       <div onClick={clearCart} className=' hover:bg-red-300 transition duration-300 cursor-pointer flex justify-center items-center gap-2   border border-red-300 px-3 rounded-md py-1'>
       <p>Clear Cart</p>
       <ImBin2 className='text-red-500'/>
       </div>
       </div>
       <div className='flex flex-wrap justify-center gap-8'>
       {cart.length===0?<p className='text-center text-3xl  h-[300px] flex justify-center items-center italic w-full'>Cart is empty</p>:cart.map((singleProduct,index)=>{
        return <div
            key={index}
            className="relative w-full mt-5 md:w-[27%] gap-3 border border-gray-200 p-4 rounded-xl shadow-md bg-white flex flex-col justify-between items-center hover:shadow-lg transition duration-300"
          >
            <img
              src={singleProduct.url}
              className="w-full h-40 object-cover rounded-lg mb-3"
              alt={singleProduct.name}
            />
            {/* <p className="text-gray-600 text-sm">ID: {singleProduct.id}</p> */}
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              {singleProduct.name}
            </h2>
            <p className="text-gray-500 text-sm text-center">
              {singleProduct.desc}
            </p>
             <div onClick={()=>removeProductFromCart(singleProduct.id)} className='flex hover:bg-red-400 cursor-pointer gap-2 justify-center items-center border p-2 border-red-200 rounded-md '>
             <p>Remove</p>
             <ImCross className='text-red-600' />
             </div>
            <p className='absolute left-3 bg-green-200 italic'>${singleProduct.price}</p>
            <p className='absolute -right-2 -top-6 font-semibold p-1 bg-yellow-200 italic rounded-full w-[30px] text-center'>{singleProduct.quantity}</p>
          </div>
       })}
       </div>
    </div>
  )
  
}
