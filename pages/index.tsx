import {useState} from "react"
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Head from 'next/head'
import Hero from "../components/Hero"
import Products from "../components/Products"

export default function Home({allProducts, cartList, setCartList, showCart, setShowCart}) {
  const [product, setProduct] = useState(allProducts) 
  return (
    <div>
      <Head>
        <title>Bejamas Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} />
        <Products showCart={showCart} setShowCart={setShowCart} cartList={cartList} setCartList={setCartList} product={product.allProducts} setProduct={setProduct}/>
    </div>
  )
}

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql"
})

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`
    }
  }
});

export async function getStaticProps(){
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  const {data} = await client.query({
    query: gql`
      query{
        allProducts(_size: 4){
          data{
            _id,
            name,
            price,
            category,
            image,
            bestseller
          },
          after,
          before
        }
      }
    `
  })

  return {
    props: {
      allProducts: data
    }
  }
}
