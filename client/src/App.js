import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Results from './pages/Results'
import Saved from './pages/Saved'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/results' component={Results} />
            <Route path='/saved' component={Saved} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
