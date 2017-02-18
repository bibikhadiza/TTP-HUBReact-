import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  margin: "auto",
  width: "50%",
  height: "auto",
  padding: "10px",
  overflow: "scroll",
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={2} />
  </div>
);

export default PaperExampleSimple;
