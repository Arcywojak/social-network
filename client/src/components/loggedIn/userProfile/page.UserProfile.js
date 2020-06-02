import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import Sword from '../../../images/sword.svg';
import FlagSword from '../../../images/flag-sword.svg';
import FlagPosts from '../../../images/flag-posts.svg';
import FlagAbout from '../../../images/flag-about.svg';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postActions';
import {getOtherUser} from '../../../actions/userActions';
import {getCommentsAll} from '../../../actions/commentActions';
import SinglePost from '../postsModals/component.SinglePost';


class UserProfile extends Component {


    componentDidMount(){

        if(this.props.userPosts.length === 0){
            this.props.getPosts();
        }
        if(this.props.comments.length === 0){
            this.props.getCommentsAll();
        }


        let name = this.props.history.location.pathname.slice(6);

        this.props.getOtherUser(name);
    }

    static propTypes = {
       // isAuthenticated: PropTypes.bool,
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

            if(block.clientHeight > 408){            
    
                block.nextElementSibling.classList.remove('none');
            }

        })
    }

    changeBlock = (block='') => {
        let about = document.querySelector('.user-profile-block-child-1');
        let posts = document.querySelector('.user-profile-block-child-2');
        let sword = document.querySelector('.user-profile-block-child-3');

        let aboutFlag = document.querySelector('.flying-block-go-back.change-block.third');
        let postsFlag = document.querySelector('.flying-block-go-back.change-block.second');
        let swordFlag = document.querySelector('.flying-block-go-back.change-block.first');

        if(!aboutFlag.classList.contains('hidden-flag')){ 
            switch(block){
                case 'ABOUT': 
                    about.classList.remove('disabled');
                    aboutFlag.classList.add('dormant');

                    posts.classList.add('disabled');
                    postsFlag.classList.remove('dormant');

                    sword.classList.add('disabled');
                    swordFlag.classList.remove('dormant');
                    break;
                case 'POSTS':
                    about.classList.add('disabled');
                    aboutFlag.classList.remove('dormant');

                    posts.classList.remove('disabled');
                    postsFlag.classList.add('dormant');

                    sword.classList.add('disabled');
                    swordFlag.classList.remove('dormant');
                    break;
                case 'SWORD':
                    about.classList.add('disabled');
                    aboutFlag.classList.remove('dormant');

                    posts.classList.add('disabled');
                    postsFlag.classList.remove('dormant');

                    sword.classList.remove('disabled');
                    swordFlag.classList.add('dormant');
                    break;

                default:break;
            }
        }
    }

    toggleFlags = (show) => {
        let aboutFlag = document.querySelector('.flying-block-go-back.change-block.third');
        let postsFlag = document.querySelector('.flying-block-go-back.change-block.second');
        let swordFlag = document.querySelector('.flying-block-go-back.change-block.first');

        let hideBlock = document.querySelector('.flying-block-hide-flag');
        let showBlock = document.querySelector('.flying-block-show-flag')

        if(show){
            showBlock.classList.add('none');
            hideBlock.classList.remove('none');

            aboutFlag.classList.remove('hidden-flag');
            postsFlag.classList.remove('hidden-flag'); 
            swordFlag.classList.remove('hidden-flag');

        } else {
            showBlock.classList.remove('none');
            hideBlock.classList.add('none');

            aboutFlag.classList.add('hidden-flag');
            postsFlag.classList.add('hidden-flag');
            swordFlag.classList.add('hidden-flag');
        }
    }

    
    
    render(){
        
        if(!this.props.isAuthenticated && !this.props.auth.isLoading){
           return  <Redirect to="/welcome" />
        }

        const listOfPosts = this.props.userPosts.length > 0 ? (
            this.props?.userPosts.map(post => {
                return (
                    <SinglePost post={post} key={post._id}/>
                )
                
            })
        ) : (
            <div className="no-posts">
                <h1>{this.props?.otherUser?.name} has not added any post yet.</h1>
            </div>
        )

        const image = this.props?.otherUser?.image !==undefined ? (
            <>
               <img src={require(`../../../images/avatars/${this.props?.otherUser?.image}`)} alt="me"/>
            </>
        ) : (
         <>
         <img alt="me" src={require('../../../images/avatars/NoImg.png')} />
      </>
        )

        return (
            <main className="container">

                {/************************* FLYING BlOCK *************************/}

                    <div className="flying-block-go-back change-block first" 
                    onClick={()=>{this.changeBlock('SWORD')}}>
                        <img src={FlagSword} alt="go back" />
                    </div>
                    <div className="flying-block-go-back change-block second "
                    onClick={()=>{this.changeBlock('POSTS')}}>
                        <img src={FlagPosts} alt="go back" />
                    </div>
                    <div className="flying-block-go-back change-block third dormant"
                    onClick={()=>{this.changeBlock('ABOUT')}}>
                        <img src={FlagAbout} alt="go back" />
                    </div>
                    <div className="flying-block-hide-flag" onClick={()=>{this.toggleFlags(false)}}>hide</div>
                    <div className="flying-block-show-flag none" onClick={()=>{this.toggleFlags(true)}}>show</div>
                    
                 {/**********************************************************/}

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
                            <h2>place: <b>&nbsp;Warsaw, Poland</b></h2>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>Date of birth: <b>&nbsp;2000-03-25</b></h2>
                        </div>
                        <div className="user-profile-block-about-user">
                            <h2>Register date: <b>&nbsp;{this.props?.otherUser?.register_date?.slice(0,10)}</b></h2>
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
                    <section className="user-profile-block-child-2 disabled">
                        <div className="user-profile-block-child-2-title">
                           {this.props?.otherUser?.name}'s posts
                        </div>
                        <div className="user-profile-block-child-2-inner-post-list">
                            {listOfPosts}
                        </div>
                    </section>
                    <aside className="user-profile-block-child-3 disabled">
                        <div className="post-details-advert-block sword" >
                            <h2>
                             THIS TIME I WANT TO SHOW YOU THIS SWORD
                            </h2>
                            <img src={Sword} alt="sword" />
                        </div>
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

    return {
        isAuthenticated: state.auth,
        otherUser: state.otherUser.otherUser,
        userPosts: filteredPosts,
        comments: state.comment.comments
    }
}

export default connect(mapStateToProps, {getOtherUser, getPosts, getCommentsAll})(UserProfile);
