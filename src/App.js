import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar.js';
import News from './components/news.js';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0,
    category: 'General'
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  handleCategoryChange = (category) => {
    this.setState({ category: category });
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        <LoadingBar
          color='#0ef'
          progress={this.state.progress}
        />
        <NavBar onCategoryChange={this.handleCategoryChange} />
        <div>
          <News setProgress={this.setProgress}  key={category} PageSize={6} country='in' category={category} />
        </div>
      </div>
    )
  }
}
