import React, { useState }  from "react";
import toast from "react-hot-toast";
import { AddProductForm } from "./AddProductForm";
// import 'react-toastify/dist/ReactToastify.min.css';



export const Products = ({setCartArray}) => {

     function handleAddButton(singleProduct){
        console.log("Enter in button");
        setCartArray((prevData)=>(
            [
            ...prevData,singleProduct
            ] 
    ))
    toast.success("Product Added!")
        
     }
     const [products,setProducts] =useState([
        {
          id: 1,
          name: "EchoSound Wireless Earbuds",
          desc: "Experience crystal-clear audio with noise-canceling wireless earbuds. Featuring Bluetooth 5.3 and a 30-hour battery life.",
          url: "https://m.media-amazon.com/images/I/51llNrK8EwL._SY450_.jpg",
          price: 49.99,
        },
        {
          id: 2,
          name: "FlexiGrip Adjustable Dumbbells",
          desc: "A versatile workout solution with adjustable weight settings (5-50 lbs). Non-slip grip for safe and effective strength training.",
          url: "https://www.acmefitness.com/assets/products/a71096908eeee7d5d3d5b976cfe2f79e.jpg",
          price: 129.99,
        },
        {
          id: 3,
          name: "AromaPro Essential Oil Diffuser",
          desc: "Enhance your space with soothing aromas using this sleek ultrasonic diffuser. Features adjustable mist settings and LED ambient lighting.",
          url: "https://m.media-amazon.com/images/I/81U26p5Y3bL._AC_SX679_.jpg",
          price: 34.99,
        },
        {
          id: 4,
          name: "GlideTech Ergonomic Mouse",
          desc: "Designed for comfort, this ergonomic mouse reduces wrist strain with adjustable DPI settings. Ideal for work and gaming.",
          url: "https://m.media-amazon.com/images/I/31XMdl9p5eL._SX300_SY300_QL70_FMwebp_.jpg",
          price: 29.99,
        },
        {
          id: 5,
          name: "ZenBlend Herbal Green Tea",
          desc: "A premium blend of organic green tea infused with chamomile, ginger, and honey. Boosts metabolism and improves digestion.",
          url: "https://images.cdn.retail.brookshires.com/zoom/d5745022-22a3-46bc-bcb2-e3ec42c3f238.jpeg",
          price: 14.99,
        },
        {
          id: 6,
          name: "NeoCharge Fast Charging Power Bank",
          desc: "A compact 20,000mAh power bank with fast-charging technology. Dual USB-C and USB-A ports for multiple device charging.",
          url: "https://m.media-amazon.com/images/I/61wjrA7vv+L.jpg",
          price: 59.99,
        },
        {
          id: 7,
          name: "SmartFit Fitness Tracker",
          desc: "Track your health and fitness goals with this sleek smartwatch. Monitors heart rate, steps, sleep, and calories burned.",
          url: "https://cdn-prd-02.pnp.co.za/sys-master/images/h92/h0c/11398600294430/silo-product-image-v2-09Apr2024-170846-6002128517259-Straight_on-38887-1122_515Wx515H",
          price: 79.99,
        },
        {
          id: 8,
          name: "ProBake Non-Stick Cookware Set",
          desc: "A high-quality non-stick cookware set with frying pans and saucepans. Designed for even heat distribution and effortless cooking.",
          url: "https://m.media-amazon.com/images/I/71Bya8HWWhL._AC_UF894,1000_QL80_.jpg",
          price: 99.99,
        },
        {
          id: 9,
          name: "GlowMist Hydrating Face Mist",
          desc: "Refresh and hydrate your skin instantly with this vitamin-enriched face mist. Infused with aloe vera and hyaluronic acid.",
          url: "https://in.pixibeauty.com/cdn/shop/files/Glow_Mist_-_80ml_-_25JUL23_-_CloseLid-web_1200x600.jpg?v=1718391201",
          price: 24.99,
        },
        {
          id: 10,
          name: "SnapFrame Digital Photo Frame",
          desc: "A modern 10-inch digital photo frame with Wi-Fi connectivity. Instantly display your favorite moments in high-resolution.",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81jwCLMtGXvwwK7bNDdkMNOqNec15hBXSDg&s",
          price: 119.99,
        },
      ]);

  return (
    <div className="container mx-auto px-4  ">
     
        <AddProductForm products={products} setProducts={setProducts}/>
        <br />
        <hr className='border-t border-2 border-gray-800'/>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 ">
        {products.map((singleProduct,index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-xl shadow-md bg-white flex flex-col justify-between items-center hover:shadow-lg transition duration-300"
          >
            <img
              src={singleProduct.url}
              className="w-full h-40 object-cover rounded-lg mb-3"
              alt={singleProduct.name}
            />
            <p className="text-gray-600 text-sm bg-red-200">ID: {singleProduct.id}</p>
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              {singleProduct.name}
            </h2>
            <p className="text-gray-500 text-sm text-center">
              {singleProduct.desc}
            </p>
            <p className="text-green-600 font-medium">${singleProduct.price}</p>
            <button
              className="mt-4 bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full transition duration-300"
              onClick={() => handleAddButton(singleProduct)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
