import React from 'react';
import {filters} from './Filters';
import './App.css';

export default class FIlterComponent extends React.Component{
  
  getStyle = (forFilter) => {
    let stilBtn = {backgroundColor: '#ababab', color: 'black'};
    return this.props.filterProp === forFilter ? stilBtn : {};
  }
  

  render(){

    return(
      <p className='filter-btns'>
          <button 
            style={this.getStyle(filters.ALL)}
            onClick={() => this.props.setFilter(filters.ALL)} >All
          </button>
          <button 
            style={this.getStyle(filters.COMPLETED)}
            onClick={() => this.props.setFilter(filters.COMPLETED)} >Completed
          </button>
          <button 
            style={this.getStyle(filters.NOT_COMPLETED)}
            onClick={() => this.props.setFilter(filters.NOT_COMPLETED)} >Not completed
          </button>
      </p>
    )
  }
}