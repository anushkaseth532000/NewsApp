// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'




// const App = () => {

//   state = {
//     progress : 0
//   }
  
//   setProgress = (progress) => {
//     this.setState({progress:progress})
//   }

//   return (
//     <Router>
//       <Navbar />
//       <LoadingBar
//         height={3}
//         color="#f11946"
//         progress={this.state.progress}
//       />

//       <Route>
//         <Route exact path="/general" element={<News setProgress={this.setProgress} key ='general' pageSize={6} country="us" category="general" />} />
//         <Route exact path="/business" element={<News setProgress={this.setProgress} key ='business' pageSize={6} country="us" category="business" />} />
//         <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key ='entertainment' pageSize={6} country="us" category="entertainment" />} />
//         <Route exact path="/sports" element={<News setProgress={this.setProgress} key ='sports' pageSize={6} country="us" category="sports" />} />
//         <Route exact path="/health" element={<News setProgress={this.setProgress} key ='health' pageSize={6} country="us" category="health" />} />
//         <Route exact path="/science" element={<News setProgress={this.setProgress} key ='science' pageSize={6} country="us" category="science" />} />
//         <Route exact path="/technology" element={<News setProgress={this.setProgress} key ='technology' pageSize={6} country="us" category="technology" />} />
//       </Route>
//     </Router>
//   );
// };

// export default App;



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

          <Route exact path="/general" element = { <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route exact path="/business" element = {<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business"/> } />
          <Route exact path="/entertainment" element = {<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/> } />
          <Route exact path="/general" element = {<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/> } />
          <Route exact path="/health" element = {<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health"/> } />
          <Route exact path="/science" element = {<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science"/> } />
          <Route exact path="/sports" element = {<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports"/> } />
          <Route exact path="/technology" element = {<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology"/> } />
      
          </Routes>
          </BrowserRouter>
      </div>
    )
  }
}