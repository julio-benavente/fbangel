import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

//Components
import Home from "./components/Home/HomePage";
import Navbar from "./components/Global/Navbar";
// import Footer from "./components/Global/Footer";

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
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
