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
      result: data
    }
    this.apiCall = this.apiCall.bind(this)
  }

 apiCall(){

  }




  render() {
   return (
     <div >
        <MenuExampleSimple/>
        <PaperExampleSimple jobDescription={this.state}/>
        <RaisedButtonExampleSimple />
     </div>
   );
 }
}

export default DashboardContainer
