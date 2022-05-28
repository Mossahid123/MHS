import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-12'>
            <div>
                <h1>1</h1>
               <h2>   How will you improve the performance of a React Application</h2>

            <p>
            Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.
            </p>
            </div>
            <div>
                <h1>2</h1>
                <h2>How does prototypical inheritance work?</h2>
                <p>
                Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>
            <div>
                <h1>3</h1>
                <h2> What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
            </div>
            <div>
                <h1>4</h1>
                <h2> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>by user filter</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;