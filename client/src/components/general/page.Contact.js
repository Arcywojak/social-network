import React, {useState} from 'react';
import logo from '../../images/Logo.svg';
import {toggleAuth} from '../../functions/functions';
import '../../styles/contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e, whichFunc) => {
       
        switch(whichFunc){
            case 'NAME':
                console.log(name)
              return  setName(e.target.value);
            case 'EMAIL':
             return   setEmail(e.target.value);
            case 'MESSAGE':
              return  setMessage(e.target.value);
            default:
                return;
        }
    }
    const onSubmit = (e) => {
       e.preventDefault(e);

    }

    return (
        <main className="container">
            <div className="grid-contact-box">
                <section className="grid-contact-box-1st">
                    <img src={logo} alt="logo" className="flying-logo"/>
                    <div className="wrapped-text">
                        <h1>Reach us</h1>
                        <p>Sed in massa ut ex molestie tincidunt nec at elit. </p>
                    </div>
                </section>
                <section className="grid-contact-box-2nd">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Puss in boots..." id="name" 
                        onChange={(e) => {handleChange(e, 'NAME')}} value={name} required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@email.com" id="email"
                         onChange={(e) => {handleChange(e, 'EMAIL')}} value={email} required/>
                        <label>Your message</label>
                        <textarea placeholder="Hello there, how are you?" rows="5" id="message" 
                        onChange={(e) => {handleChange(e, 'MESSAGE')}} value={message} required>
                        
                        </textarea>
                        <button className="btn-2">Send</button>
                    </form>
                </section>
            </div>

            <div className="overlay none"  onClick={() => {toggleAuth(null, true)}}></div>
        </main>
    )
}

export default Contact
