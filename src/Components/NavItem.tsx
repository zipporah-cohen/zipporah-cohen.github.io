import React, { ReactElement } from "react";
import { NavLink } from "react-router";
import { IconButton, Tooltip, useTheme} from "@mui/material";

export type NavItemProps = {
  icon: ReactElement;
  hoverText: string;
  path?: string;
}

const NavItem: React.FC<NavItemProps> = (
  {
    icon, 
    hoverText, 
    path = "/"
  }: NavItemProps
) => {
  const { palette } = useTheme();

  return (
    <NavLink to={path}>
      <Tooltip 
        title={hoverText}
      >
        <IconButton sx={{
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          ":hover": {
            backgroundColor: palette.primary.contrastText,
            color: palette.primary.main
          }
        }}>
          {icon}
        </IconButton>
        </Tooltip>
    </NavLink>
    );
};

export default NavItem;
