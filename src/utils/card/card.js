import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButtonExampleSimple  from '../buttons/button.js'
import styles from './card.css'
import CSSModules from 'react-css-modules';
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
  marginTop: "10%"
}


class CardExampleExpandable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
  }

  rewind(){
    if(this.state.counter > 0){
      this.setState({
        counter: --this.state.counter,
      })
    }
  }

  forward(){
    if(this.state.counter < 2){
      this.setState({
        counter: ++this.state.counter,
      })
    }
  }

  render(){
    return (
      <div style={product} className="cardBadass">
        <div className="icono-rewind" onClick={this.rewind.bind(this)}></div>
        <div className="icono-forward" onClick={this.forward.bind(this)}></div>
      <div style={style}>
      <Card>
        <CardHeader
          title={this.props.postings[this.state.counter].positionTitle + ", " + " " + this.props.postings[this.state.counter].level}
          subtitle={this.props.postings[this.state.counter].companyName + "," + " " + this.props.postings[this.state.counter].location}
          actAsExpander={true} showExpandableButton={true}
        />
        <CardText>
          {this.props.postings[this.state.counter].jobDescription}
        </CardText>

        <CardText expandable={true}>
          Responsibilities:
          <ul>
          {this.props.postings[this.state.counter].responsibilities.map((r, i)=> <li key={i} className='responsibilities'>{r}</li>)}
          </ul>
        </CardText>

        <CardText>
          Requirement:
          <ul>
          {this.props.postings[this.state.counter].requirements.map((r, i)=> <li key={i} className='requirement'>{r}</li>)}
          </ul>
        </CardText>

        <CardText expandable={true} >
        Perks:
        <ul>
          {this.props.postings[this.state.counter].perks.map((p, i)=> <li key={i} className='perks'>{p}</li>)}
        </ul>
        </CardText>

        <CardText expandable={true} >
          Application Link: {this.props.postings[this.state.counter].applicationLink}
        </CardText>
      </Card>
      <RaisedButtonExampleSimple/>
    </div>
    </div>
    )
  }
}

export default CSSModules(CardExampleExpandable, styles);
