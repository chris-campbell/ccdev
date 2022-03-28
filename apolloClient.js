import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/cl0s6ll651nzp01z8chu5chre/master",
  cache: new InMemoryCache(),
});

export default client;
