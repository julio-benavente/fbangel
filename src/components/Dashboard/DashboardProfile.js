import React from "react";
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

  return (
    <DashboardProlfile>
      <Name>
        Hola, <p>{name}</p>
      </Name>
      <ProfileImage>
        <UserSvg />
      </ProfileImage>
      <Logout>
        Log out
        <LogoutSvg />
      </Logout>
    </DashboardProlfile>
  );
};

export default MainComponent;
