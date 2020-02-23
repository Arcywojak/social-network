import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/homeLoggedIn.css';


class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired
    }
    
    render(){

        if(!this.props.isAuthenticated){
           return  <Redirect to="/welcome" />
        }

        return (
                    <div className="form-create-post">
                        <div className="form-create-post-title">
                            Create a post
                        </div>
                        <div className="inner-form">
                            <div className="img-center">
                                <h2>Hello {this.props.user.name}</h2>
                                <img src={require(`../../../images/avatars/${this.props.user?.image}`)} alt="me" />
                            </div>
                            <div>
                                <div className="input-and-label">
                                    <label htmlFor="title">Title</label>
                                    <input id="title" type="text" placeholder="How are you?"/>
                                </div>
                                <div className="input-and-label">
                                    <label htmlFor="content">Content</label>
                                    <textarea placeholder="¿uoy era woH"></textarea>
                                </div>
                                <div className="add-tags-block">
                                    <p>Add some tags:</p>
                                    <select>
                                        <option name="myThoughts">shrek</option>
                                        <option name="myThoughts">my-thoughts</option>
                                        <option name="myThoughts">business</option>
                                        <option name="myThoughts">I-need-help</option>
                                        <option name="myThoughts">jokes</option>
                                        <option name="myThoughts">titbits</option>
                                        <option name="myThoughts">politics</option>
                                        <option name="myThoughts">learning</option>
                                        <option name="myThoughts">ad</option>
                                    </select>
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="create-post-adding">
                            <button className="btn-1 light-blue">Release</button>
                        </div>
                    </div>
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
