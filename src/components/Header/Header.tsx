import React from "react";
import * as Style from "./index.styled";
import Image from "next/image";
import logo from "@/../public/HD-TV_Logo.svg.png"

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo href='/'>
          <Image
            src={logo}
            width={59}
            height={59}
            alt="logo"
            style={{background: 'white'}}
          />
          <Style.LogoTitle>
                Pluto films
          </Style.LogoTitle>
        </Style.Logo>
        <Style.ThemeTitle
          onClick={() => props.switchTheme()}
        >
          Change theme
        </Style.ThemeTitle>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
