import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButtonExampleSimple  from '../buttons/button.js'
import styles from './card.css'
import CSSModules from 'react-css-modules';
import data from '../../dashboard/data'

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

const product = {
  marginTop: "10%",
  marginBottom: "10%"
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
      <div style={product} className="cardBadass">

      <Card>

      <CardHeader
        title={this.props.postings[0].positionTitle + ", " + " " + this.props.postings[0].level}
        subtitle={this.props.postings[0].companyName + "," + " " + this.props.postings[0].location}
        actAsExpander={true} showExpandableButton={true}
      />
      <CardText>
        {this.props.postings[0].jobDescription}
      </CardText>

      <CardText>
        Requirement:
        <ul>
        {this.props.postings[0].requirements.map((r, i)=> <li key={i} className='requirement'>{r}</li>)}
        </ul>
      </CardText>


      <CardHeader
        title={this.props.postings[1].positionTitle + ", " + " " + this.props.postings[1].level}
        subtitle={this.props.postings[1].companyName + "," + " " + this.props.postings[1].location}
      />
      <CardText>
        {this.props.postings[1].jobDescription}
      </CardText>

      <CardText>
        Requirement:
        <ul>
        {this.props.postings[1].requirements.map((r, i)=> <li key={i} className='requirement'>{r}</li>)}
        </ul>
      </CardText>

      <CardHeader
        title={this.props.postings[2].positionTitle + ", " + " " + this.props.postings[2].level}
        subtitle={this.props.postings[2].companyName + "," + " " + this.props.postings[2].location}
      />
      <CardText>
        {this.props.postings[2].jobDescription}
      </CardText>

      <CardText>
        Requirement:
        <ul>
        {this.props.postings[2].requirements.map((r, i)=> <li key={i} className='requirement'>{r}</li>)}
        </ul>
      </CardText>

      </Card>

    </div>
    )
  }
}

export default CSSModules(HistoryContainer, styles);
