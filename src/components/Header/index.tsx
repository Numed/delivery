import { FC } from "react";

import {
  HeaderContainer,
  HeaderInner,
  HeaderLogo,
  HeaderNavContainer,
  LinkButton,
  ListItem,
  NavList,
} from "./styles";
import { routesPath } from "./routes";
import { Routes } from "../../enums";

const Header: FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo to={Routes.MAIN}>Delivery App</HeaderLogo>
        <HeaderNavContainer>
          <NavList>
            {routesPath.map(({ id, path, name }) => {
              return (
                <ListItem key={id}>
                  <LinkButton to={path}>{name}</LinkButton>
                </ListItem>
              );
            })}
          </NavList>
        </HeaderNavContainer>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
