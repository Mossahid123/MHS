import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(" + "https://i.ibb.co/D9dqxRr/Stock-Snap-DJ7-F99-AVL7.jpg" + ")",}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Car manufacturers</h1>
                    <p className="mb-5">Car brands are increasingly identifying digital marketing as a core pillar of their strategy, says Google’s Global Head of Automotive</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
// https://i.ibb.co/D9dqxRr/Stock-Snap-DJ7-F99-AVL7.jpg