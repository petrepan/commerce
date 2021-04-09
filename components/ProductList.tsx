import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination"

export default function ProductList({product, setProduct, cartList, setCartList, showCart, setShowCart}){
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
        <div className="w-full md:w-4/5 md:ml-12">
            <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {product && product.data ? product.data.map((product)=>(
                    <div key={product._id} className="w-full">
                    <div className="relative w-full group h-96">
                        <div className="min-w-full h-full">
                            <Image src={product.image} layout="fill" className="object-cover" alt={product.name}/>
                        </div>
                        {product.bestseller && <div className="absolute top-0 bg-white px-2">Best Seller</div>}
                        <div className="absolute bottom-0 text-center w-full opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
                            <button onClick={()=>handleCart(product._id, product.name,product.price, product.image)} className="bg-black w-full text-white uppercase text-base py-2 px-0 appearance-none focus:outline-none">add to cart</button>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-sm py-0.5 text-gray-500 capitalize">{product.category}</h6>
                        <h4 className="pb-1 font-bold leading-none text-xl capitalize">{product.name}</h4>
                        <p className="text-base text-gray-700">${Number(product.price) % 1 === 0 ? `${Number(product.price)}.00` : Number(product.price) }</p>
                    </div>
                </div>
                )) : <div className="py-4 text-center">No Product Found</div>}
        </div>
       {product && <Pagination product={product} setProduct={setProduct} />}
    </div>
        
    )
}