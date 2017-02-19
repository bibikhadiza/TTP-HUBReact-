import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import button_style from './button.css'
import {Modal, Button} from "react-bootstrap"

const style = {
  margin: 40,
};

const Trigger = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <RaisedButton
          marginTop="-10px"
          onClick={() => this.setState({ show: true})}
        >
          Apply
        </RaisedButton>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

const RaisedButtonExampleSimple = () => (
  <div className="button_style">
    <Trigger style={style}/>
    <RaisedButton label="Skip" secondary={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;
