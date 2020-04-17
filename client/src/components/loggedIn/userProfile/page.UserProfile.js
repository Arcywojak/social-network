import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postActions';
import {getOtherUser} from '../../../actions/userActions';
import {getCommentsAll} from '../../../actions/commentActions';
import '../../../styles/user.min.css';
import {Sword} from '../../../images/sword.svg';
import SinglePost from '../postsModals/component.SinglePost';


class UserProfile extends Component {


    componentDidMount(){

        if(this.props.userPosts.length === 0){
            this.props.getPosts();
        }
        if(this.props.comments.length === 0){
            this.props.getCommentsAll();
        }
        console.log(this.props)

        let userId = this.props.history.location.pathname.slice(6);

        this.props.getOtherUser(userId);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        getOtherUser: PropTypes.func,
        getPosts: PropTypes.func,
        getCommentsAll: PropTypes.func
    }

    componentDidUpdate(){
        this.checkOverflow();
    }

    checkOverflow = () => {
        let contentBlocks = document.querySelectorAll('.single-post-content-inner');

        
        contentBlocks.forEach( (block) => {

            console.log(block.nextElementSibling)

            if(block.clientHeight > 408){            
    
                block.nextElementSibling.classList.remove('none');
            }

        })

        
    }

    
    
    render(){
        
      //  if(!this.props.isAuthenticated){
      //     return  <Redirect to="/welcome" />
        //}

        const listOfPosts = this.props?.userPosts.map(post => {
            return (
                <SinglePost post={post} key={post._id}/>
            )
            
        })

        const image = this.props?.post?.user_image !==undefined ? (
            <>
               <img src={require(`../../../images/avatars/${this.props?.otherUser.image}`)} alt="me"/>
            </>
        ) : (
         <>
         <img src={require('../../../images/avatars/NoImg.png')} />
      </>
        )
        console.log(this.props.otherUser)

        return (
            <main className="container">
                <div className="user-profile-block">
                    <section className="user-profile-block-child-1">
                        <div className="user-profile-block-child-1-inner-scroll">
                        <div className="user-profile-block-user-text-and-img">
                            {image}
                            <h1>{this.props?.otherUser?.name}</h1>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>Nationality: <b>&nbsp;Polish</b></h2>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>Date of birth: <b>&nbsp;25.03.2000</b></h2>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>place: <b>&nbsp;Warsaw, Poland</b></h2>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>About me:</h2>
                            <p>Roquefort red leicester red leicester. Cauliflower cheese pepper jack pepper 
                                jack manchego dolcelatte queso ricotta melted cheese. Mascarpone squirty 
                                cheese edam monterey jack the big cheese red leicester when the cheese 
                                comes out everybody's happy cheese on toast. Paneer queso chalk and cheese
                                 cheeseburger emmental queso cheesy grin cheese strings. Feta port-salut 
                                 queso.</p>
                        </div>
                        </div>
                    </section>
                    <section className="user-profile-block-child-2">
                        <div className="user-profile-block-child-2-title">
                           {this.props?.otherUser?.name}'s posts
                        </div>
                        <div className="user-profile-block-child-2-inner-post-list">
                            {listOfPosts}
                        </div>
                    </section>
                    <aside className="user-profile-block-child-3">

                    </aside>
                </div>
            </main>
        )
    }
   
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(6);

    let filteredPosts = [];
        filteredPosts = state.posts.posts.filter(post => post?.user_id === id);

console.log(state)
    return {
        isAuthenticated: state.auth.isAuthenticated,
        otherUser: state.otherUser.otherUser,
        userPosts: filteredPosts,
        comments: state.comment.comments
    }
}

export default connect(mapStateToProps, {getOtherUser, getPosts, getCommentsAll})(UserProfile);
