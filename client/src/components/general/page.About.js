import React from 'react'
import {toggleAuth} from '../../functions/functions';
import '../../styles/about.css';
import funnyMan from '../../images/funnyMan2.svg';
import logo from '../../images/Logo.svg';
import flower from '../../images/flower.svg';
import brian from '../../images/brian.jpg'; //Photo by Brian Asare on Unsplash
import xu from '../../images/xu.jpg'; //Photo by Xu Duo on Unsplash
import xu2 from '../../images/xu2.jpg'; //Photo by Xu Duo on Unsplash
import ourWoman from '../../images/ourWoman.jpg'; //Photo by Mohammad Metri on Unsplash
import luis from '../../images/luis.jpg'; //Photo by Luis Quintero on Unsplash
import ashkan from '../../images/ashkan.jpg'; //Photo by Ashkan Forouzani on Unsplash
import buildings from '../../images/buildings.svg';

const click = () => {
    const map = document.querySelector('.map');

    console.log(map);
}

const About = () => {


    
    return (
        <main className="container">
            
                <div className="text-with-img about-section"> 
                    <img src={logo} alt="logo"/>
                    <p>Some about our company</p>
                </div>
                <section className="about-blocks">
                <article className="about-block">
                    <h2>Who we are</h2>
                    Aliquip consequat cupidatat ex nulla. Proident tempor ipsum amet veniam nisi ullamco consectetur aute nostrud eiusmod ipsum consequat Lorem anim. Duis dolore consectetur nostrud ipsum. Aliqua culpa voluptate Lorem aliqua eiusmod nisi qui dolor reprehenderit nisi occaecat dolor. Officia nisi ullamco ipsum qui sunt officia aliquip eu ex nostrud et sit enim commodo.
                </article>
                <article className="about-block">
                    <h2>Our achievements</h2>
                    Aliquip consequat cupidatat ex nulla. Proident tempor ipsum amet veniam nisi ullamco consectetur aute nostrud eiusmod ipsum consequat Lorem anim. Duis dolore consectetur nostrud ipsum. Aliqua culpa voluptate Lorem aliqua eiusmod nisi qui dolor reprehenderit nisi occaecat dolor. Officia nisi ullamco ipsum qui sunt officia aliquip eu ex nostrud et sit enim commodo.
                </article>
                <article className="about-block">
                <h2>Our future goals</h2>
                Sed vulputate porta tortor, commodo finibus lectus molestie ut. In finibus elit tortor, vitae viverra dolor efficitur eu. In aliquet lobortis mi. Cras tristique lorem dui. Aliquam mi neque, ultrices eget enim eu, suscipit euismod lacus. Integer justo justo, aliquam at bibendum ut, commodo eu nibh. Mauris viverra purus quis tortor rhoncus volutpat.                </article>
                <article className="about-block">
                <h2>Why you should pick us</h2>
                Vivamus ullamcorper risus enim, quis ultrices arcu luctus vitae. Quisque vehicula, urna mattis dignissim finibus, ex lacus feugiat magna, vitae gravida neque purus eget leo. Duis enim arcu, tempus at blandit ac, faucibus eu diam. Duis commodo non sapien non pulvinar. Pellentesque a ante magna. Sed mi justo, tristique sed dignissim in, vestibulum qui                </article>
                </section>
                <div className="text-with-img about-section">
                    <img src={funnyMan} alt="logo"/>
                    <p>Some about our employees</p>
                </div>
            
                <section className="employee-list">
                    <article className="employee">
                        <img src={xu2} alt="somebody" />
                        <div className="text">
                            <h2>Brian <br/> CEO</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                    <article className="employee">
                        <img src={xu} alt="somebody" />
                        <div className="text">
                            <h2>Samantha <br/> Backend Developer</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                    <article className="employee">
                        <img src={brian} alt="somebody" />
                        <div className="text">
                            <h2>Pablo<br/>UI Designer</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                    <article className="employee">
                        <img src={luis} alt="somebody" />
                        <div className="text">
                            <h2>Luiz <br/> Tester</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                    <article className="employee">
                        <img src={ourWoman} alt="somebody" />
                        <div className="text">
                            <h2>Katia<br/> Frontend Developer</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                    <article className="employee">
                        <img src={ashkan} alt="somebody" />
                        <div className="text">
                            <h2>Ashkan<br/> UX Designer</h2>
                            <p>Minim tempor reprehenderit aute anim sit tempor occaecat. Aliqua ut amet nostrud commodo. Excepteur culpa esse ex anim enim sint mollit enim exercitation dolor amet ex sunt ea. Sint consequat amet nostrud ea culpa eu. Laboris id non laborum elit eiusmod et. Reprehenderit elit aliqua excepteur ad aliqua aute sunt aliqua ipsum amet duis non deserunt elit.</p>
                        </div>
                    </article>
                </section>
                <div className="text-with-img about-section"> 
                    <img src={buildings} alt="logo"/>
                    <p onClick={click}>Our localization</p>
                </div>
                <div className="map-and-text">
                <p className="map">
                    <iframe
                    title="google-map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7484.749939541333!2d57.65290257693313!3d-20.284740745624255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217cf63001d0f05f%3A0x772e2699afca3987!2sMontagne%20Blanche%2C%20Mauritius!5e0!3m2!1spl!2spl!4v1581783904493!5m2!1spl!2spl"                         
                    allowfullscreen="">
                    </iframe>
                </p>
                <div className="map-and-text-child">
                    
                    <h2>I do not know what a place is it. <br/> 
                        It is a random island in the world. <br/>
                        And here is a random text to make this div out and blah blah blah.<br/>
                        Have a nice day.
                    </h2>
                    <h2>If u want to know something else ask author on facebook because contact form does not work 
                    <br/>(but let's pretend it does).</h2>
                    <div className="flower-keeper">
                        <img src={flower} alt="flower" />
                    </div>
                </div>
                </div>

                <div className="overlay none"  onClick={() => {toggleAuth(null, true)}}></div>
        </main>
    )
}

export default About;
