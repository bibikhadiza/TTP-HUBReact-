import React from 'react'
import data from './data'
import MenuExampleSimple from './menu'
import PaperExampleSimple from '../utils/paper/paper.js'
import RaisedButtonExampleSimple  from '../utils/buttons/button.js'

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
        <MenuExampleSimple/>
        <PaperExampleSimple/>
        <RaisedButtonExampleSimple />
     </div>
   );
 }
}

export default DashboardContainer
