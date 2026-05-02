import React from 'react';
import { useTheme } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Checklist, ContentCut, ShoppingBag } from '@mui/icons-material';
import NavItem from './NavItem';
import { SvgIcon } from '@mui/material';
import { ReactComponent as HomeIcon } from '../zc-icon.svg';

const Nav: React.FC = () => {
  const { palette } = useTheme();

  const homeIcon = (
    <SvgIcon component={HomeIcon} inheritViewBox sx={{ fontSize: 24 }} />
  )

  return (
    <AppBar 
      sx={{ 
        backgroundColor: palette.secondary.main,
        boxShadow: 2
      }} 
      position="sticky"
      elevation={0}
    >
      <Toolbar className="nav-bar">
        <NavItem icon={homeIcon} hoverText='Home' path='/' />
        <NavItem icon={<ContentCut/>} hoverText='Projects' path='/projects'/>
        <NavItem icon={<Checklist/>} hoverText='Life List' path='/life-list'/>
        <NavItem icon={<ShoppingBag/>} hoverText='Consumption' path='/consumption'/>
      </Toolbar>
    </AppBar>
    );
};

export default Nav;
