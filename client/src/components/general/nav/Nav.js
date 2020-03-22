import React, {Component} from 'react'
import Deskop from './Deskop';
import Mobile from './Mobile';
import {connect} from 'react-redux';
import {loadUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
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
    componentDidUpdate(){
        let loader = document.querySelector('.loader')

        if(!this.props.isLoading){
            loader.classList.add('none')
        }

    }

    render()  {

        const header = this.state.mobile ? <Mobile/> : <Deskop/>

        return (
            <>
            <div className="loader">
                <div className="inner-loader">
                </div>
            </div>

            {header}
            <Register/>
            <Login/>
            </>
        )
    }  
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps, {loadUser})(Nav);
