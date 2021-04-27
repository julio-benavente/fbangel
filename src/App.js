import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";

//Components
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Home from "./components/Home/HomePage";
import HowItWorks from "./components/HowItWorks/HowItWorksPage";
import JoinUs from "./components/JoinUs/JoinUsPage";
import ReferralProgram from "./components/ReferralProgram/ReferralProgramPage";
import Faq from "./components/Faq/FaqPage";
import Contact from "./components/Contact/ContactPage";
import NoValid from "./components/NoValid/NoValidPage";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditionsPage";

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
          <Route path="/unete-ahora" component={JoinUs} />
          <Route path="/programa-referidos" component={ReferralProgram} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/no-valid" component={NoValid} />
          <Route path="/terminos-condiciones" component={TermsAndConditions} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
