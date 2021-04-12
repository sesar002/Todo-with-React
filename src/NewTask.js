import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class NewTask extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inpuText: ''
    }
  }

  handleInputChange = (event) => {
    const currentText = event.target.value;
    this.setState({inputText: currentText});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.inputText !== undefined){
      const trimano = this.state.inputText.trim();
      if(trimano.length < this.props.minInputLength){
        return;
      }

      this.props.onAdd(trimano);
      this.setState({inputText: ''});
    }else{
      return;
    }
  }

  render(){
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <input className='input' type="text" value={this.state.inputText} onChange={this.handleInputChange} />
        <input className='button' type="submit" value="Add" />
      </form>
    )
  }
};

NewTask.propTypes = {
  maxInputLength: PropTypes.number,
  onAdd: PropTypes.func
};

NewTask.defaultProps = {
  maxInputLength: 3,
}