import React from "react";

import "./App.css";
import InputForm from "./components/InputForm";
import ContextProvider from "./store/Context";
import StoredCard from "./components/StoredCard";

function App() {
  return (
    <ContextProvider>
      <InputForm />
      <StoredCard />
    </ContextProvider>
  );
}

export default App;
