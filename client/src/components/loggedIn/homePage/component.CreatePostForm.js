import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toggleCreateForm, removeAll, togglePostAddedInformation} from '../../../functions/functions';
import {addPost} from '../../../actions/postActions';
import x from '../../../images/x.svg';
import '../../../styles/createPostForm.css';


class HomeLoggedIn extends Component {

    state = {
        title:'',
        content:'',
        tags: []
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        addPost: PropTypes.func
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    addTag = () => {
        let tags = document.querySelector('.add-tags');

        console.log(this.state.tags);
        let listOfTags = this.state.tags;
        let isDuplicate = false;

        listOfTags.forEach(tag => {
            if(tags.value === tag) isDuplicate = true;
        })

        if(!isDuplicate){
            listOfTags = [...listOfTags, tags.value]

            this.setState({
                tags: listOfTags
            })
        }
    }
    removeTag = e => {
        let listOfTags = this.state.tags;
        let newList = listOfTags.filter(tag => tag !== e.target.id);
        this.setState({
            tags: newList
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            user_id: this.props.user._id,
            user_name: this.props.user.name,
            user_image: this.props.user.image,
            title:this.state.title,
            content:this.state.content,
            tags:this.state.tags
        }
        this.setState({
            title:'',
            content:'',
            tags:[]
        })

        toggleCreateForm();
        togglePostAddedInformation(true);
       

        this.props.addPost(newPost);
    }
    
    render(){

        const listOftags = this.state.tags.length ? (
            this.state.tags.map(tag => {
                return(
                <>
                <div className="tag-to-add" key={tag} 
                id={tag} onClick={(e) => {this.removeTag(e)}}>
                    <i id={tag}>#{tag}</i>
                    
                </div>
                
                </>
                )
            })
        ) : ('')

        const messageAboutTags = this.state.tags.length ? (
            <p className="small-message">
                Click onto a tag to delete it.
            </p>
        ) : ('')

        if(!this.props.isAuthenticated){
           return  <Redirect to="/welcome" />
        }

        return (
            <>
                <div className="trigger-create-post" >
                    <div className="trigger-create-post-title">
                        Create a post
                    </div>
                    <div className="trigger-create-post-inner" >
                        <div className="first">
                            <img src={require(`../../../images/avatars/${this.props.user?.image}`)} alt="me" 
                                onClick={()=>toggleCreateForm(true)}/>
                        </div>
                        <div className="second" onClick={()=>toggleCreateForm(true)}>
                            <p>Click here to create a post.</p>
                        </div>
                    </div>
                </div>

                <form className="form-create-post flying-component none" onSubmit={this.handleSubmit}>
                    <div className="form-create-post-title">
                        Create a post
                            <img src={x} alt="exit" onClick={()=>{removeAll()}}/>
                    </div>
                    <div className="scrollable">
                        <div className="inner-form">
                            <div className="img-center">
                                <h2>Hello {this.props.user.name}</h2>
                                <img src={require(`../../../images/avatars/${this.props.user?.image}`)} alt="me" />
                            </div>
                            <div>
                                <div className="input-and-label">
                                    <label htmlFor="title">Title</label>
                                    <input id="title" type="text" placeholder="How are you?" required 
                                    onChange={(e) => {this.handleChange(e)}}/>
                                </div>
                                <div className="input-and-label">
                                    <label htmlFor="content">Content</label>
                                    <textarea id="content" placeholder="¿uoy era woH" required
                                    onChange={(e) => {this.handleChange(e)}}></textarea>
                                </div>
                                <div className="add-tags-block">
                                    <p>Add some tags:</p>
                                    <select className="add-tags">
                                        <option name="myThoughts">shrek</option>
                                        <option name="myThoughts">my-thoughts</option>
                                        <option name="myThoughts">business</option>
                                        <option name="myThoughts">I-will-sell</option>
                                        <option name="myThoughts">I-will-buy</option>
                                        <option name="myThoughts">I-need-help</option>
                                        <option name="myThoughts">jokes</option>
                                        <option name="myThoughts">titbits</option>
                                        <option name="myThoughts">politics</option>
                                        <option name="myThoughts">learning</option>
                                        <option name="myThoughts">ad</option>
                                    </select>
                                    <button type="button" onClick={this.addTag}>Add</button>
                                </div>
                            </div>
                        </div>
                   
                       <div className="list-of-tags">
                            {listOftags}
                            {messageAboutTags}
                            </div>
                        <div className="create-post-adding">
                            <button className="btn-1 light-blue">Create</button>
                        </div>
                        <p className="small-message">
                        If your post will not meet your expectations, you will always be able to delete it.
                        </p>
                    </div>
                </form>

                
        </>
        )
    }
   
}

const mapStateToProps = state => {

    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {addPost})(HomeLoggedIn);
