import Link from "next/link";
import CartItem from "../components/CartItem"

export default function Hero({cartList, setCartList, showCart, setShowCart}){
    const handleCart = (id, name, price, image) => {
        let quantity = 1
        let cart = []
        let cartproduct = {id, name, price, image, quantity}
        if(window.localStorage.getItem("cart") === null){
            cart.push(cartproduct)
            setCartList(cart)
            window.localStorage.setItem("cart", JSON.stringify(cart))
            setShowCart(true)
        }else{
            let cart = JSON.parse(window.localStorage.getItem("cart"))
            const existItem = cart.find((x)=>x.id === id)
            existItem ? cart.map((x)=>x.id === existItem.id ? x.quantity++ : cartproduct) : cart.push(cartproduct)
            setCartList(cart)
            window.localStorage.setItem("cart", JSON.stringify(cart))
            setShowCart(true)
        }
    }
    return (
        <section className="relative py-6 border-b-2">
            <CartItem showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} />
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">
                    Samurai King Resting
                </h3>
                <div className="hidden md:block">
                    <button onClick={()=>handleCart("mine3456", "Samurai King Resting",40, "/hero-img.png")} className="bg-black text-white text-sm uppercase px-8 py-2">Add to cart</button>
                </div>
            </div>
            <div className="md:my-6 mt-4 relative">
                <div className="h-56 sm:h-72 md:h-full">
                    <img src="/hero-img.png" className="w-full h-full object-cover" alt="hero image"/>
                </div>
                <div className="absolute bg-white px-10 py-2 font-bold bottom-0 left-0">Photo of the day</div>
            </div>
            <div className="py-2 md:hidden">
                    <button onClick={()=>handleCart("mine3456", "Samurai King Resting",40, "/hero-img.png")} className="bg-black text-white text-sm uppercase px-8 py-2.5 w-full">Add to cart</button>
                </div>
            <div className="lg:flex justify-between">
                <div className="lg:w-3/5 lg:mr-4">
                    <h6 className="font-bold py-0.5">About the Samurai King Resting</h6>
                    <h6 className="font-bold py-0.5 text-gray-600">Pets</h6>
                    <p className="py-1 text-gray-600 text-sm">
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 
                    </p>
                    <p className="py-1 text-gray-600 text-sm">
                        text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                    </p>
                </div>
                <div className="lg:w-2/5 lg:text-right">
                    <h6 className="py-0.5 pt-1 lg:pt-0 font-bold">People also buy</h6>
                    <div className="flex lg:justify-end py-2 lg:py-4">
                        <div className="mr-2 md:mr-4">
                        <img src="/popular1.png" className="w-full object-cover" alt="people also buy"/>
                        </div>
                        <div className="mr-2 md:mr-4">
                        <img src="/popular2.png" className="w-full object-cover" alt="people also buy"/>
                        </div>
                        <div>
                        <img src="/popular3.png" className="object-cover" alt="people also buy"/>
                        </div>
                    </div>
                    <div className="lg:pt-3 pt-0">
                        <h6 className="font-bold py-0.5 lg:py-1">Details</h6>
                        <div className="text-sm py-0.5 lg:py-1 text-gray-600">Size: 1020 x 1020 pixel</div>
                        <div className="text-sm py-0.5 lg:py-1 text-gray-600">
                            Size: 15 mb
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}