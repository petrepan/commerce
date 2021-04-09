import Link from "next/link";
import Cart from "../components/Cart"

export default function Header({cartList, setCartList, showCart, setShowCart}){
    return (
        <header className="relative flex items-center justify-between py-4 border-b-2">
            <Link href="/">
                <img src="/bejamas.svg" alt="logo" width="120" height="30"/>
            </Link>
            <Cart showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} />
        </header>
    )
}