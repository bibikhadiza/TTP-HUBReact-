import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DropDownMenuSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Fidel Severino" />
          <MenuItem value={2} primaryText="Portfolio" />
          <MenuItem value={3} primaryText="Application History" />
          <MenuItem value={4} primaryText="Resources" />
          <MenuItem value={5} primaryText="Slack" />
          <MenuItem value={6} primaryText="Log Out" />
        </DropDownMenu>
      </div>
    );
  }
}
