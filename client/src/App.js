import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Nav from './components/general/nav/Nav';
import Footer from './components/general/Footer';
import HomeLoggedOut from './components/loggedOut/page.HomeLoggedOut';
import HomeLoggedIn from './components/loggedIn/homePage/page.HomeLoggedIn';
import UserProfile   from './components/loggedIn/userProfile/page.UserProfile';
import Rulebook from './components/general/page.Rulebook';
import About from './components/general/page.About';
import Contact from './components/general/page.Contact';
import PostDetails from './components/loggedIn/postsModals/page.PostDetails';
import Page404 from './components/general/page.404';

import './styles/ALL_STYLES.css';
import './styles/404.css';
import './styles/about.css';
import './styles/authModals.css';
import './styles/contact.css';
import './styles/createPostForm.css';
import './styles/deskop.css';
import './styles/footer.css';
import './styles/homeLoggedIn.css';
import './styles/homeLoggedOut.css';
import './styles/loader.css';
import './styles/mobile.css';
import './styles/postDetails.css';
import './styles/register.css';
import './styles/rulebook.css';
import './styles/singlePost.css';
import './styles/user.css';



class App extends Component {
  render(){
    return (
    <Router>
      <Provider store={store}>
        <div className="App">

          <Nav/>

        <Switch>
          <Route exact path='/'   component={HomeLoggedIn} />
          <Route path='/welcome'   component={HomeLoggedOut} />
          <Route path='/rulebook' component={Rulebook} />
          <Route path='/about'    component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/user/:username'  component={UserProfile} />
          <Route path='/posts/:id'  component={PostDetails} />
          <Route component={Page404} />
        </Switch>

          <Footer/>

        </div>
      </Provider>
    </Router>
      );
  }
  
}

export default App;
