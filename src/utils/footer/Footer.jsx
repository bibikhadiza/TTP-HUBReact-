import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="icono-codepen"></a>
        <a href="#" >Tech Talent Pipeline HUB</a>
      </footer>
    );
  }
}

export default CSSModules(Footer, styles);
