import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import ApolloClient  from "apollo-boost";
//import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
