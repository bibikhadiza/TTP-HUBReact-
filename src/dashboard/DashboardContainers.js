import React from 'react'
import data from './data'
import MenuExampleSimple from './menu'


class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.apiCall = this.apiCall.bind(this)
    this.state = {
      result: ""
    }
    this.apiCall = this.apiCall.bind(this)
  }

 apiCall(){

     fetch('http://xsurlapi.herokuapp.com').then(result=> {
        this.setState({results:result.json()});
      });
    return this.state.result
  }




  render() {
   return (
     <div >
       <button onClick={this.apiCall()}>Hi!</button>
       <p>{this.apiCall()}</p>
     </div>
   );
 }
}

export default DashboardContainer
