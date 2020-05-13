import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const Layout = ({ children }: IProps) => (
  <React.Fragment>
    <NavBar />
    {children}
  </React.Fragment>
);

export default Layout;
