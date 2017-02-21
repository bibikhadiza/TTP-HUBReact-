import React from 'react'
import data from './data'
import DropDownMenuSimpleExample from './menu'
import CardExampleExpandable from '../utils/card/card.js'
import HeaderContainer2 from '../utils/header/HeaderContainer2.js'
import Nav from '../utils/header/HeaderContainer2.js'
import {Modal, Button} from "react-bootstrap"
import HistoryContainer from "../utils/history/HistoryContainer"
import ResourcesContainer from "../utils/resources/ResourcesContainer"


const dashBoardStyle = {
  margin: "auto"
};


class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.apiCall = this.apiCall.bind(this)
    this.state = {
      result: data
    }
  }


  apiCall(){

   }


  render(){
    return (
      <div style={{margin: '50px'}}>


        <DropDownMenuSimpleExample />
        <CardExampleExpandable postings={this.state.result}/>

    </div>
    )
  }
}


export default DashboardContainer

// <CardExampleExpandable postings={this.state.result}/>
