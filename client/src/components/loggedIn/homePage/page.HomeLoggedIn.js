import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/homeLoggedIn.css';
import {toggleAuth, removeAll} from '../../../functions/functions';
import CreatePostForm from './component.CreatePostForm';
import PostList from '../postsModals/component.PostList';
import PostAdded from './component.PostAdded';



class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }
    componentDidMount(){
        if(document.querySelector('.overlay') !== null){    
        toggleAuth(null, true);
        }
    }
    
    render(){

        if(!this.props.isAuthenticated){
           return  <Redirect to="/welcome" />
        }

        return (
            <main className="container home-logged-in">
                <div className="inner-container">
                    <CreatePostForm/>
                    <PostAdded />

                    <PostList />
                </div>

                <div className="overlay"  onClick={()=>removeAll()}></div>

            </main>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(HomeLoggedIn);
