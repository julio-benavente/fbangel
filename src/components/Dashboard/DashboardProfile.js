import React from "react";
import { useHistory } from "react-router-dom";

// Components
import {
  DashboardProlfile,
  Name,
  ProfileImage,
  Logout,
} from "../../styles/Dashboard/DashboardProfileStyles";

import { ReactComponent as UserSvg } from "../../assets/svgs/user.svg";
import { ReactComponent as LogoutSvg } from "../../assets/svgs/logout.svg";

const MainComponent = () => {
  const name = "Julio Benavente";

  const { push } = useHistory();
  const logout = () => {
    push("/login");
  };

  return (
    <DashboardProlfile>
      <Name>
        Hola, <p>{name}</p>
      </Name>
      <ProfileImage>
        <UserSvg />
      </ProfileImage>
      <Logout onClick={logout}>
        Log out
        <LogoutSvg />
      </Logout>
    </DashboardProlfile>
  );
};

export default MainComponent;
