import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/general/nav/Nav';
import Footer from './components/general/Footer';
import HomeLoggedOut from './components/loggedOut/page.HomeLoggedOut';
import HomeLoggedIn from './components/loggedIn/homePage/page.HomeLoggedIn';
import UserProfile   from './components/loggedIn/page.UserProfile';
import Rulebook from './components/general/page.Rulebook';
import About from './components/general/page.About';
import Contact from './components/general/page.Contact';
import PostDetails from './components/loggedIn/postsModals/page.PostDetails';

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
          <Route path='/posts/:id'  component={PostDetails} />
          <Footer/>
        </div>
      </Provider>
    </Router>
      );
  }
  
}

export default App;
