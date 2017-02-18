import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButtonExampleSimple  from '../buttons/button.js'
import LeftSideButton from '../sidebutton/leftSideButton.js'
import RightSideButton from '../sidebutton/rightSideButton.js'


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
};

const CardExampleExpandable = () => (

  <div className="card">

    <LeftSideButton />

        <div style={style}>
          <Card>

            <CardHeader
              title="Job Title"
              subtitle="Company"
              actAsExpander={true} showExpandableButton={true}
            />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>

            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>

      <RightSideButton />
  <RaisedButtonExampleSimple />
</div>
);

export default CardExampleExpandable;
