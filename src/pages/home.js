//homePage
import React from 'react';
import './home.css';

const home = () => {
    return (
        <div className='home'>
            {/*Circle container*/}
            <div className='profileCircle'>
                {/*Profile Image*/}
                <img src='../images/adam.png' alt='Adam Fuentes' className='profilePicture'/>

                {/* Hidden Links that Appear on Hover*/}
                <div className='hiddenLinks'>
                    <a href='./projects.js'>Projects</a>
                    <a href='./aboutMe.js'>About Me</a>
                    <a href='./contact.js'>Contact Me!</a>
                    <a href='./hiddenGame.js'>Wanna Play a Game?</a>
            
                </div>
            </div>      
        </div>
    );
};

export default home;