import React from 'react';
import "./reactform.scss"

const reactFormContainer = document.querySelector('.react-form-container');


const {Component} = React;

class Checkbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }
  render(){
    const {name, label, value, checkedMain} = this.props;
    if(checkedMain.indexOf(value) > -1){
      console.log('check it', value)
       return (<p>
             <label>
               <input
                 checked='true'
                 name={name}
                 type='checkbox'
                 value={value}
                 onChange={()=>{
                   this.props.onChange(value)
                 }}
                 />
               <span>{label}</span>
             </label>
           </p>)
       }
       else {
         console.log('do not check it', value)
         return (<p>
             <label>
               <input
                 name={name}
                 type='checkbox'
                 value={value}
                 onChange={()=>{
                   this.props.onChange(value)
                 }}
                 />
               <span>{label}</span>
             </label>
           </p>)
       }
  }
}

const checkbox_data = [
  {id: 1, name:'category', label:'Home & Daily Needs', value:'HOME_&_DAILY_NEEDS'},
  {id: 2, name:'category', label:'Electronics & Mobiles', value:'ELECTRONICS_&_MOBILES'},
  {id: 3, name:'category', label:"Women's Fashion", value:'WOMENS_FASHION'},
  {id: 4, name:'category', label:"Men's Fashion", value:'MENS_FASHION'},
  {id: 5, name:'category', label:"Kid's", value:'KIDS'},
  {id: 6, name:'category', label:'All', value:'ALL'}
]

class FormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      category:[]
    }
    this.handle_onChange = this.handle_onChange.bind(this);
  }
  handle_onChange(value){
    console.log('currentState: ', this.state);

    console.log('passed value: ', value);
    let _category = this.state.category;
    if(this.state.category.indexOf(value) < 0){
      console.log('does not exist, so push. . .')
      //if not found add
      const newCategory = this.state.category;
      _category.push(value);
      //console.log('updated newCategory: ', _category);
      this.setState({
        category: _category
      })
    }
    else {
      //if already exists remove
      console.log('already exists!!!')
      _category = _category.splice(_category.indexOf(value), 1);
      this.setState({
        category: _category
      })
    }

    console.log('updated state: ', this.state)
  }
  render(){
    return (
      <div>
        <h2>Get daily alerts for deals of the day:</h2>
        <form>
          <fieldset>
            <legend>Choose your categories:</legend>
            {checkbox_data.map(item=>(<Checkbox {...item}
                                        checkedMain={this.state.category}
                                        onChange={this.handle_onChange.bind(this)}
                                        />))}
          </fieldset>
          <div>
            <input type='text'/> <button type='submit'>Subscribe</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Checkbox;
