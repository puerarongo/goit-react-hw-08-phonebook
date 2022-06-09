import React from 'react';
import Navigation from 'components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
//import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppBar;
