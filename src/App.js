import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

import "./scss/styles.scss";

class App extends React.Component {
  state = {
    user: null,
    movies: [],
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
