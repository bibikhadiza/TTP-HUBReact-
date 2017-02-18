import React from 'react'
import data from './data'
import MenuExampleSimple from './menu'
import CardExampleExpandable from '../utils/card/card.js'


const dashBoardStyle = {

};

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
     <div style={dashBoardStyle}>
        <MenuExampleSimple/>
        <CardExampleExpandable />
     </div>
   );
 }
}

export default DashboardContainer
