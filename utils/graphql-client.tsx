import {GraphQLClient} from "graphql-request"

const endpoint = 'https://graphql.fauna.com/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer fnAEGVLiQbACB5lqUULGKh-7ZMyIIX-Nt-YYwiXr`,
    },
});