import React, { Component } from 'react';

// CONTAINER / COMPONENT
import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <div className="content">

        </div>
      </div>
    );
  }
}
