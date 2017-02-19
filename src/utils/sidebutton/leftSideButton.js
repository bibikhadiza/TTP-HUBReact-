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
  textAlign: "left",
  textIndent: "-9999px",
  direction: "ltr"
};

const LeftSideButton = () => (


      <div className="leftSideButton" >
        <div className="icono-rewind" style={style}></div>
      </div>


);

export default LeftSideButton;
