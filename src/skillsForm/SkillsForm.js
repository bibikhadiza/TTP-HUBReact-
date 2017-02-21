import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {GridList} from 'material-ui/GridList';
import skills from './skills'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
  },
  checkbox: {
    margin: 15,
  },
  uploadBtn: {
    display: "block",
    margin: "5px auto",
  }
};

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSkillsCheckboxes = this.renderSkillsCheckboxes.bind(this);
  }

  renderSkillsCheckboxes() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={30}
          style={styles.gridList}
        >
          {skills.map((skill) => (
            <Checkbox
              id={'skill-' + skill.id}
              label={skill.name}
              style={styles.checkbox}
              onCheck={this.handleChange}
            />
          ))}
        </GridList>
      </div>
    )
  }

  // this doesn't seem to work
  handleChange(e) {
    const isChecked = e.target.checked;
    const id = e.target.id.replace('skill-', '');
    // console.log(e.target)

    if (isChecked) {
      this.setState(
        {checked: [...this.state.checked, id]}
      );
    } else {
      e.target.value = 'off';
    }
  }

  handleSubmit(e) {
    // console.log(this.state)
    // e.preventDefault();
    // submit and redirect to dashboard
  }

  render() {
    return (
      <form action='/dashboard' method='get'>
        <h3>Select your skills</h3>
        <Divider />
        { this.renderSkillsCheckboxes() }
        <RaisedButton
          style={styles.uploadBtn}
          type="file"
          className="col end-xs"
          label="Upload Resume"
          primary
        ><input type="file"/></RaisedButton>
        {/* <input type="file" label="Upload Resume"/> */}
        <RaisedButton
          type="Submit"
          className="col end-xs"
          label="Submit"
          secondary
        />
      </form>
    );
  }
}

export default SkillsForm;
