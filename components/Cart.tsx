import {useState, useEffect} from "react"

export default function Cart ({cartList, setCartList, showCart, setShowCart}){

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
    
    return(
        <div className="w-8 relative">
            <button onClick={toggleCart}>
            <img src="/cart.svg" className="w-full" alt="cart"/>
            </button>
            {cartList.length > 0 && <div className="absolute bottom-0 right-0 bg-black text-white text-sm font-bold px-0.5 leading-none">{cartList.length}</div> }
            
        </div>
    )
}