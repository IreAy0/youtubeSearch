import React, { Component } from 'react';

export default class searchBar extends Component {
    state={
        videoName: ''
    }
    onFormChange =(e) =>{
        // e.preventDefault()
        this.setState({videoName: e.target.value})
    }
    onFormSubmit = (e) =>{
        e.preventDefault();

        this.props.onFormSubmit(this.state.videoName)
    }
  render() {
    return (
      <div className="ui segment search-bar">
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                  <label >Video Search</label>
                  <div className='ui category search'>
              <div className='ui icon input'>
                <input
                  type='text'
                  value={this.state.videoName}
                    onChange={this.onFormChange}
                placeholder="Search video"
                />
                <i className='search icon' />
              </div>
            </div>
              </div>
          </form>
        
      </div>
    );
  }
}
