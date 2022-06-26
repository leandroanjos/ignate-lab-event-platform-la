import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloProps = {
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache(),
}

console.log("apolloProps", apolloProps)

export const client = new ApolloClient(apolloProps)