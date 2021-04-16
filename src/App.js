import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

//Components
import Home from "./components/Home/HomePage";
import HowItWorks from "./components/HowItWorks/HowItWorksPage";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";

// Styles
import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/como-funciona" component={HowItWorks} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
