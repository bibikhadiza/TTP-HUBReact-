import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import CardExampleExpandable from '../utils/card/card.js';
import ApplicationHistory from '../utils/card/card.js';

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
    this.state = {value: 1, showJob: true};
    this.removeJob = this.removeJob.bind(this);
    this.img = this.img.bind(this)
  }

  handleChange = (event, index, value) => this.setState({value});

  handleClick = function(){
     this.setState({ showJob: false });

     if (this.state.showJob) {
       <ApplicationHistory />
     }
  };


  img = function() {
    this.state.showJob ? <ApplicationHistory /> : "";
  }

  removeJob = function(){
    this.setState({ showJob: false })
  }


  render() {
    return (
      <header>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Fidel Severino" />
          <MenuItem value={2} primaryText="Portfolio" href="https://ttp-profile.herokuapp.com/FidelSeverino"/>
          <MenuItem value={1} primaryText="Resources" />
          {this.img()}<MenuItem value={3} clickHandler={this.props.removeJob} primaryText="Application History"/>
          <MenuItem value={5} primaryText="Slack" href="https://ttp-hub.slack.com/"/>
          <MenuItem value={6} primaryText="Log Out" />
        </DropDownMenu>
      </header>
    );
  }
}
