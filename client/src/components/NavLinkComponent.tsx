import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import type { INavLink } from "../interfaces/interfaces";

const NavLinkStyle =
  "transition ease-in-out delay-150 duration-300 font-bold sm:hover:text-secondAccent";
const NavLinkComponent: FC<INavLink> = (props) => {
  const { PATH, Name } = props;

  const { pathname } = useLocation();
  const Active = pathname !== PATH;
  return (
    <NavLink
      to={PATH}
      className={
        Active
          ? `${NavLinkStyle} textPrimary`
          : `${NavLinkStyle} text-accent underline`
      }
    >
      {Name}
    </NavLink>
  );
};

export default NavLinkComponent;
