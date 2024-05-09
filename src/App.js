import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import "./styles/global.scss";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
