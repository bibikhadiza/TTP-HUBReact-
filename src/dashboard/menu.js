import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
 display: 'inline-block',
 margin: '16px 32px 16px 0',
};

const MenuExampleSimple = () => (
 <div>
   <Paper style={style}>
     <Menu>
       <MenuItem primaryText="Portfolio" />
       <MenuItem primaryText="Applied" />
       <MenuItem primaryText="Connect"/>
     </Menu>
   </Paper>
 </div>
);

export default MenuExampleSimple;