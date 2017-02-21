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


class ResourcesContainer extends React.Component {
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
        title={"Training Resources"}
        subtitle={this.props.postings[0].companyName + "," + " " + this.props.postings[0].location}
        actAsExpander={true} showExpandableButton={true}
      />
      <CardText >
        {"1.Code Academy: Codecademy is where most people who are new to coding get their start. If you haven’t been to the site yet…where have you been!? The platform revolves around interactive learning; that is, you read a little, type your code right into the browser, and see results immediately. Topics taught: HTML & CSS, JavaScript, PHP, Python, Ruby, Angularjs, The Command Line, and more"}
      </CardText>

        <CardText >
        {"2.Codwars: Codewars offers a fun way to learn coding. With a martial-arts theme, the program is based on challenges called “kata.” Complete them to earn honor and progress to higher ranks. Topics taught: CoffeeScript, JavaScript, Python, Ruby, Java, Clojure, and Haskel"}
        </CardText>

        <CardText>
        {"3. edX: An open-source higher education program governed by MIT and Harvard. Offers 107 courses under the “computer science” category, teaching various coding languages. Topics taught: Java, C#, Python, and many more"}
        </CardText>
      </Card>

    </div>
    )
  }
}

export default CSSModules(ResourcesContainer, styles);
