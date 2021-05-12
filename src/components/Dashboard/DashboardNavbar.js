import React from "react";

// Styles
import {
  DashboardNavbar,
  Logo,
  NavbarWrapper,
  NavbarItem,
} from "../../styles/Dashboard/DashboardNavbarStyles";

// Assets
import { ReactComponent as UsersSvg } from "../../assets/svgs/user.svg";
import { ReactComponent as PaymentsSvg } from "../../assets/svgs/payments.svg";
import { ReactComponent as ConfigurationSvg } from "../../assets/svgs/configuration.svg";

const MainComponent = ({ match: { path }, ...props }) => {
  return (
    <DashboardNavbar>
      <Logo>fbangel</Logo>
      <NavbarWrapper>
        <NavbarItem activeClassName="active" to={() => `${path}/users`}>
          <UsersSvg />
          <p>Users</p>
        </NavbarItem>
        <NavbarItem activeClassName="active" to={() => `${path}/payments`}>
          <PaymentsSvg />
          <p>Payment</p>
        </NavbarItem>
        <NavbarItem activeClassName="active" to={() => `${path}/configuration`}>
          <ConfigurationSvg />
          <p>Configuration</p>
        </NavbarItem>
      </NavbarWrapper>
    </DashboardNavbar>
  );
};

export default MainComponent;
