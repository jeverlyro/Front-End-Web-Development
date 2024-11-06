import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  let hello = "Selamat datang";

  const handleClick = () => {
    console.log("Tombol di click");
    <Header text={hello} />;
  };

  return (
    <div>
      <h1>App.js</h1>
      <Header text="Header using props" />
      <Home text="Home using props" />
      <Footer text="Footer using props" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
