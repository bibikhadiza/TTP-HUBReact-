import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButtonExampleSimple  from '../buttons/button.js'
import styles from './card.css'
import CSSModules from 'react-css-modules';
import data from '../../dashboard/data';

// import LeftSideButton from '../sidebutton/leftSideButton.js'
// import RightSideButton from '../sidebutton/rightSideButton.js'


const style = {
  margin: "auto",
  width: "50%",
  height: "auto",
  padding: "10px",
  postition: "relative",
  margin: "auto",
  width: "700px",
  marginBottom: "80px",
  marginTop: "-100px",
  top: "20%",
};

const container = {
  width: "85%",
  margin: "5% auto 10%"
}

const card = {
  width: "50%",
  display: "inline-block",
  height: "400"
}

const bigFont = {
  fontSize: "1.5em"
}

const ulStyle = {
  width: "600"
}

class HistoryContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
  }


  render(){
    return (
      <div style={container} className="cardBadass">
        <div>
          <Paper style={card} >
            <Menu>
              <MenuItem primaryText="Requirements" style={bigFont}/>
              <ul style={ulStyle}>
                <strong>Job Description:</strong><br /> {this.props.postings[0].jobDescription}
              </ul>
              <br />
              <ul>
                <strong>Requirements:</strong><br/>
                {this.props.postings[0].requirements.map(req => <li>{req}</li>)}
              </ul>
            </Menu>
          </Paper>

          <Paper style={card}>
            <Menu>
              <MenuItem primaryText="Interview Prep" style={bigFont}/>
              <ul>
                <h4>Software Engineering</h4>
                <li>
                  <a href="http://www.techrepublic.com/blog/software-engineer/css-interview-questions-and-answers/" target="_blank">
                    General software engineering interview questions
                  </a>
                </li>
                <h4>HTML</h4>
                <li>
                  <a href="http://techpreparation.com/html-interview-questions-answers1.htm" target="_blank">
                    HTML interview questions
                  </a>
                </li>
                <h4>JavaScript</h4>
                <li>
                  <a href="https://www.toptal.com/javascript/interview-questions" target="_blank">
                    JavaScript interview questions
                  </a>
                </li>
                <h4>React</h4>
                <li>
                  <a href="https://www.toptal.com/react/interview-questions" target="_blank">
                    React interview questions
                  </a>
                </li>
                <br/>
                <h4>Slack</h4>
                <p><a href="#">@sarah</a> - Software Developer @ Slack</p>
              </ul>
            </Menu>
            {/* <CardHeader
              title="Interview Prep"
              subtitle="Prepare with some practice interview questions"
            /> */}
          </Paper>
        </div>



        <Card>
          <CardHeader
            title={this.props.postings[0].positionTitle + ", " + " " + this.props.postings[0].level}
            subtitle={this.props.postings[0].companyName + "," + " " + this.props.postings[0].location}
            actAsExpander={true} showExpandableButton={false}
          />
        </Card>

    </div>
    )
  }
}

export default CSSModules(HistoryContainer, styles);
