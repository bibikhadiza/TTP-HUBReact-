import React from 'react'
import data from './data'
import DropDownMenuSimpleExample from './menu'
import CardExampleExpandable from '../utils/card/card.js'
import HeaderContainer from '../utils/header/HeaderContainer.js'

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
        <DropDownMenuSimpleExample/>
        <CardExampleExpandable />
     </div>
   );
 }
}

export default DashboardContainer
