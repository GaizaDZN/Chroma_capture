import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
const Client = () => {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  );
};

export default Client;
