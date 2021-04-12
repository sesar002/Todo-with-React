import React from 'react';
import {filters, routs} from './constants';
import './App.css';
import { Link } from 'react-router-dom';

export default class FIlterComponent extends React.Component{
  
  getStyle = (forFilter) => {
    let stilBtn = {backgroundColor: '#ababab', color: 'black'};
    return this.props.filterProp === forFilter ? stilBtn : {};
  }
  

  render(){

    return(
      <p className='filter-btns'>
        <Link to={routs.ALL}>
          <button
            className='linkbtn'
            style={this.getStyle(filters.ALL)}>All
          </button>
        </Link>
        <Link to={routs.COMPLETED}>
          <button 
            className='linkbtn'
            style={this.getStyle(filters.COMPLETED)}>Completed
          </button>
        </Link>
        <Link to={routs.NOT_COMPLETED}>
          <button 
            className='linkbtn'
            style={this.getStyle(filters.NOT_COMPLETED)}>Not completed
          </button>
        </Link>
      </p>
    )
  }
}