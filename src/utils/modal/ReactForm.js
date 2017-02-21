import React from 'react';
import "./reactform.scss"
import Webcam from 'react-webcam';
import RaisedButton from 'material-ui/RaisedButton';
import interviewReference from '../../dashboard/interviewReference.js'
import ReactDOM from 'react-dom';
const style = {
  margin: 12,
};


const reactFormContainer = document.querySelector('.react-form-container');

class ReactFormLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ReactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      question1: '',
      email: '',
      subject: '',
      message: false,
      video: false,
      data: false,
    }
  }

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  applyMessage(){
    this.setState({
      message: true
    })
  }




  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formquestion1: this.state.question1,
      formquestion2: this.state.question2,
      formquestion3: this.state.question3,
    }

    if (formData.formquestion1.length < 1 || formData.formquestion2.length < 1 || formData.formquestion3.length < 1) {
      return true;
    }


    this.setState({
      question1: '',
      question2: '',
      question3: '',
    });
  };

  interviewPrep(){
    this.setState({
      data: true,
    })
  }

  applyVideo(){
    this.setState({
      video: true
    })
  }


  render() {
    const form = <form className='react-form' onSubmit={this.handleSubmit}>
      <h1>Application</h1>
      <fieldset className='form-group'>
        <ReactFormLabel htmlFor='formName' title='Tell us about yourself?' />

        <input id='formQuestion1' className='form-input' name='question1' type='text' ref='formName' required onChange={this.handleChange} value={this.state.question1} />
      </fieldset>

      <fieldset className='form-group'>
        <ReactFormLabel htmlFor='formQuestion2' title='Why are you interested in this company?' />

        <textarea id='formQuestion2' className='form-input' name='question2' type='text' required onChange={this.handleChange} value={this.state.question2} />
      </fieldset>

      <fieldset className='form-group'>
        <ReactFormLabel htmlFor='formQuestion3' title='What is your opinion on agile development?' />

        <textarea id='formQuestion3' className='form-input' name='question3' type='text' required onChange={this.handleChange} value={this.state.question3} />
      </fieldset>

      <fieldset className='form-group'>
        <ReactFormLabel htmlFor='formQuestion4' title='Tell us a joke!' />

        <textarea id='formQuestion4' className='form-input' name='question4' type='text' required onChange={this.handleChange} value={this.state.question3} />
      </fieldset>

      <div className='form-group'>
        <input id='formButton' className='btn' type='Next' placeholder='Next' onClick={this.applyVideo.bind(this)}/>
      </div>
    </form>

    const link = this.state.message === true ? <div>Your application has been submitted. Please Review Interview Prep documents in application history</div>: <div><Webcam />
         <RaisedButton label="Start" primary={true} style={style} />
         <RaisedButton label="Stop" primary={true} style={style} />
         <RaisedButton label="Submit" primary={true} style={style} onClick={this.applyMessage.bind(this)}/>
       </div>
    return(
      <div className="model_div">
        {this.state.video === false ? form : link}
      </div>
    )
  }
};
export default ReactForm;
