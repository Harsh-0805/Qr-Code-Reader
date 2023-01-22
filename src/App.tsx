import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import QrScanner from "./Pages/QrScanner";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/qrscanner" element={<QrScanner />} />
          <Route element={() => <h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
