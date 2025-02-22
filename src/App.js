
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;


  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {

    const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <BrowserRouter>
        <Navbar/> 

        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />

      <Routes>
          
          <Route exact path="/" element = { <News setProgress={this.setProgress} apiKey={apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route exact path="/business" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/> } />
          <Route exact path="/entertainment" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> } />
          <Route exact path="/general" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route exact path="/health" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/> } />
          <Route exact path="/science" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/> } />
          <Route exact path="/sports" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports"/> } />
          <Route exact path="/technology" element = {<News setProgress={this.setProgress} apiKey={apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"/> } />
      
          </Routes>
          </BrowserRouter>
      </div>
    )
  }
}