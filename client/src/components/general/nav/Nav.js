import React, {Component} from 'react'
import Desktop from './Desktop';
import Mobile from './Mobile';
import {connect} from 'react-redux';
import {loadUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import {removeAll, toggleOverlay} from '../../../functions/functions';
import Register from '../../loggedOut/component.Register';
import Login from '../../loggedOut/component.Login';
import '../../../styles/loader.css'

class Nav extends Component  {
    state = {
        mobile:false
    }

    static propTypes = {
        loadUser: PropTypes.func.isRequired
    }

    componentDidMount(){

        this.props.loadUser();

        if(window.innerWidth < 700 || window.innerHeight < 600) this.setState({mobile:true});
        else this.setState({mobile:false});

        window.addEventListener('resize', () => {
            if(window.innerWidth < 700 || window.innerHeight < 600) this.setState({mobile:true});
            else this.setState({mobile:false})
        });
    }
    componentDidUpdate(prevProps){
        let closeAuthModals = document.querySelector('.close-auth-modals');

        if(!this.props.auth.isLoading ){
            let loader = document.querySelector('.loader')
            loader.classList.add('none')
        }
        if(this.props.auth.isAuthenticated && !prevProps.auth.isAuthenticated){     
            closeAuthModals.classList.add('none'); 
            removeAll();
        } else {
            closeAuthModals.classList.remove('none')
        }

    }

    render()  {

        const header = this.state.mobile ? <Mobile/> : <Desktop/>

        return (
            <>
            <div className="loader">
                <div className="inner-loader">
                </div>
            </div>

            {header}
            <div className="close-auth-modals">
                <Register/>
                <Login/>
            </div>
            <div className="overlay none"  onClick={()=>removeAll()}></div>
            
            </>
        )
    }  
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {loadUser})(Nav);
