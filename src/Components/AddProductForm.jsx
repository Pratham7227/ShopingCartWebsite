import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoAddCircle } from "react-icons/io5";

export const AddProductForm = ({products,setProducts}) => {

    const [productform,setProductForm]=useState({productName:"",productDesc:"",imgUrl:"",id:"",price:""});
    // console.log(products[products.length-1].id);
    // console.log("ID",products.id[products.length-1]);
    
    function handleChange(e){
       const {name,value}=e.target;

       setProductForm((prev)=>({
          ...prev,[name]:value
       }))
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("name",productform.productName);
        console.log("desc",productform.productDesc);
        console.log("url",productform.imgUrl);
        console.log("id",productform.id);
        console.log("price",productform.price);
        const obj={
            id:products[products.length-1].id + 1,
            name:productform.productName,
            desc:productform.productDesc,
            url:productform.imgUrl,
            price:Number(productform.price)
        }
        setProducts((prev)=>([
            ...prev,obj
        ]))
        toast.success("New Product Added !")
        
    }
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add New Product</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>

      <div>
          <label className="block text-gray-600 font-medium mb-1">Product ID:</label>
          <input
            type="text"
            placeholder="01"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  cursor-not-allowed bg-gray-200"
            onChange={handleChange}
            name='id'
            readOnly
            value={products[products.length-1].id + 1}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Product Name:</label>
          <input
            type="text"
            placeholder="Remote"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
             onChange={handleChange}
             name='productName'
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Product Description:</label>
          <textarea
            placeholder="Remote controller is a handheld device used to wirelessly operate electronic appliances..."
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name='productDesc'
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Product Image URL:</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name='imgUrl'
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Price:</label>
          <input
            type="text"
            placeholder="$ 45.89"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name='price'
          />
        </div>

        

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
