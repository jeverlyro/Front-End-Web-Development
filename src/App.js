import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <h1>App.js</h1>
      <Header text="Tes 123" />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
