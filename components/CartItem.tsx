import {useState, useEffect} from "react"
import Image from "next/image";

export default function CartItem ({cartList, setCartList, showCart, setShowCart}){

    useEffect(()=>{
        if(window.localStorage.getItem("cart") === null){
            setCartList([])
        
        }else{
        setCartList(JSON.parse(window.localStorage.getItem("cart")))

        }
    },[])

    const toggleCart = (e) =>{
        e.preventDefault()
        setShowCart(!showCart)
            }

    const clearCart =(e)=>{
        e.preventDefault()
        localStorage.removeItem('cart');
        setCartList([])
    }

    return(
        <div className={`${showCart ? "opacity-100":"opacity-0 pointer-events-none"} w-full md:w-96 border-2 text-right bg-white absolute top-0 right-0 p-4 z-10 transition ease-in-out duration-400`}>
            <button onClick={toggleCart} className="text-right">
               <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L20 20" stroke="black" strokeWidth="4"/>
            <path d="M2 20L20 2" stroke="black" strokeWidth="4"/>
            </svg>
            </button>
            {cartList.length ? <div>
                {cartList.map((item)=>(
            <div key={item.id} className="flex items-center text-left py-4 border-b-2">
                <div className="w-3/5">
                    <h5 className="font-bold py-0.5">{item.name}</h5>
                    <p className="py-0.5 text-gray-700 text-sm">${Number(item.price) % 1 === 0 ? `${Number(item.price)}.00` : Number(item.price) }  <span className="text-gray-400 ml-1">{item.quantity > 1 && `x${item.quantity}`}</span> </p>
                </div>
                <div className="w-2/5 h-20 relative">
                    {/* <img src={item.image} alt={item.name}/> */}
                    <Image src={item.image} layout="fill" className="object-cover static" alt={item.name}/>
                </div>
            </div>
            
                ))}
                
                <div className="text-center mt-4">
                <button onClick={clearCart} className="border-black border-2 w-full font-bold uppercase py-1">clear</button>
            </div>
            </div> : <div className="py-4 text-center">No Item in the Cart</div>}

        </div>
    )
}