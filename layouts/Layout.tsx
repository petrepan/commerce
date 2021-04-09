import React, {useState} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children, cartList, setCartList, showCart, setShowCart }) {    
  
    return (       
<div className="container mx-auto px-4 md:px-6">
        <Header showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} />      
      <main>{React.cloneElement(children, {cartList, setCartList, showCart, setShowCart})}</main>    
        <Footer />
      </div>
    )
  }