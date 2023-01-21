import QrScanner from "./Pages/QrScanner";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <QrScanner/>
    </div>
    </ApolloProvider>
  );
};

export default App;
