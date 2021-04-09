import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

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

export default async (req, res) => {
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    const cursor = req.body
    
    try {
      const { data } = await client.query({
        query: gql`
          query {
            allProducts(_cursor: "${cursor}", _size: 4){
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
        `,
      });
      res.status(200).json({ allProducts: data, error: null });
    } catch (error) {
      if (error.message === "404: Not Found") {
        res.status(404).json({ allProducts: null, error: "No Products found" });
      } else {
        res
          .status(500)
          .json({ allProducts: null, error: "Internal Error, Please try again" });
      }
    }
  }
  