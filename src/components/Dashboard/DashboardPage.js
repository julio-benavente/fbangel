import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import DashboardNavbar from "./DashboardNavbar";
import DashboardProfile from "./DashboardProfile";
import Payments from "./Payments/PaymentsPage";

// Styles
import { Dashboard, Main } from "../../styles/Dashboard/DashboardPageStyles";

const DashboardPage = ({ match, ...props }) => {
  useEffect(() => {
    const navbar = document.querySelector(".Navbar");
    const footer = document.querySelector(".Footer");

    navbar.classList.add("display-none");
    footer.classList.add("display-none");
  });

  return (
    <Dashboard>
      <DashboardNavbar match={match} />
      <DashboardProfile />
      <Main>
        <Switch>
          <Route exact to="/" component={Payments} />
          <Route exact to="/payments" component={Payments} />
          {/* <Route to="/configuration" component={Configuration} /> */}
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default DashboardPage;
