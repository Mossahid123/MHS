import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/My-photo.png'
import './MyPortfolio.css'

const MyPortfolio = () => {
    return (
        <div className='mt-5'>
            <div class="relative w-96 mx-auto">
                <img class="round w-96 " src={img} alt="user" />
                <h3 className='text-2xl text-center text-black font bold'>Hossain Sarker</h3>
                <h6 className='text-3xl text-center font-bold'>Dhaka</h6>
                <h4 className='text-center font-bold text-2xl mt-3'>Education</h4>
                <p className='text-center mt-2'>Dawra (masters) and honours 1st year at department of sociology<br /> front-end developer</p>
                <h1 className='text-3xl text-center mt-5'>My projects</h1>
                
                <a className="link link-hover" href='https://assingment-11-hussain.firebaseapp.com/'><p className='text-center text-primary mt-3'>1.Inventory Projects</p></a>
                <Link to=''></Link>
                <Link to=''></Link>
                <div class="skills ">
                    <h6 className='text-1xl'>Skills</h6>
                    <ul className='list-none'>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul>
                </div>
            </div>
<div>

</div>
            
        </div>
    );
};

export default MyPortfolio;