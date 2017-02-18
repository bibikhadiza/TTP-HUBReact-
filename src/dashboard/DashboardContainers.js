import React from 'react'
import data from './data'
import DropDownMenuSimpleExample from './menu'
import CardExampleExpandable from '../utils/card/card.js'
import HeaderContainer2 from '../utils/header/HeaderContainer2.js'
import Nav from '../utils/header/HeaderContainer2.js'

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
        <DropDownMenuSimpleExample />
        <CardExampleExpandable />
     </div>
   );
 }
}

export default DashboardContainer
