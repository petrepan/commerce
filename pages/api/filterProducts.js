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
      authorization: `Bearer fnAEGVLiQbACB5lqUULGKh-7ZMyIIX-Nt-YYwiXr`
    }
  }
});

export default async (req, res) => {
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    const filter = req.body
    try {
      const { data } = await client.query({
        query: gql`
          query {
            findProductByCategory(category: "${filter}" _size:2){
              data{
                _id,
                name,
                price
              },
              after,
              before
            }
          }
        `,
      });
      console.log(data)
      // res.status(200).json({ allProducts: data.characters.results, error: null });
    } catch (error) {
      if (error.message === "404: Not Found") {
        // res.status(404).json({ characters: null, error: "No Characters found" });
      } else {
        // res
        //   .status(500)
        //   .json({ characters: null, error: "Internal Error, Please try again" });
      }
    }
  }
  