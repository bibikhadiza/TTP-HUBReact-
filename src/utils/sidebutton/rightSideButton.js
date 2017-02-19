import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import button_style from './sidebutton.css'
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


const style = {
  display: "inline-block",
  verticalAlign: "middle",
  position: "relative",
  fontStyle: "normal",
  color: "black",
  textAlign: "right",
  textIndent: "-999px",
  direction: "rl"
};


const RightSideButton = () => (

  <div className="rightSideButton">
    <div style={style} className="icono-forward"></div>
  </div>

);

export default RightSideButton;
