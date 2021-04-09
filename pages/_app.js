import {useState} from "react"
import '../styles/globals.css'
import Layout from "../layouts/Layout"

function MyApp({ Component, pageProps }) {
  const [cartList, setCartList] = useState([]) 
  const [showCart, setShowCart] = useState(false)

  return (
    <Layout showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
