import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomeLoggedOut from './components/loggedOut/HomeLoggedOut';
import HomeLoggedIn from './components/loggedIn/HomeLoggedIn';
import UserProfile   from './components/loggedIn/UserProfile';
import Nav from './components/general/nav/Nav';
import Footer from './components/general/Footer';
import Rulebook from './components/general/Rulebook';
import About from './components/general/About';
import Contact from './components/general/Contact';

import './App.css';
import './styles/ALL_STYLES.min.css';
import './styles/homeLoggedOut.min.css';
import './styles/footer.css';
import './styles/mobile.css';
import './styles/authModals.css';


class App extends Component {
  render(){
    return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Nav/>
          <Route exact path='/'   component={HomeLoggedIn} />
          <Route path='/welcome'   component={HomeLoggedOut} />
          <Route path='/rulebook' component={Rulebook} />
          <Route path='/about'    component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/user/:username'  component={UserProfile} />
          <Footer/>
        </div>
      </Provider>
    </Router>
      );
  }
  
}

export default App;
