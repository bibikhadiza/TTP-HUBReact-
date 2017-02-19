import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import button_style from './button.css'

const style = {
  margin: 40,
};


const RaisedButtonExampleSimple = () => (
  <div className="button_style">
    <RaisedButton label="Apply" secondary={true} style={style} />
    <RaisedButton label="Skip" secondary={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;
