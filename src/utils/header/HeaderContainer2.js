import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import DropDownMenuSimpleExample from '../../dashboard/menu.js'
import {AppBar, Tabs, Tab} from 'material-ui'

class Nav extends React.Component {
  render() {
    return (
      <AppBar title="My App">
        <Tabs>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </AppBar>
    )
  }
}



export default Nav;
