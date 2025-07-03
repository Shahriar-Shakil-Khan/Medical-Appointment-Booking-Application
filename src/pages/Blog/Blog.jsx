import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-10 text-center mb-5'>Blogs</h1>
            <p className='  text-center mb-5'>Let's explore some basic concept that will make you a good developer</p>

            <div>
                <h1 className='text-xl font-bold mt-10  mb-5'>What is useState and How Does it Work in React?</h1>
                <p className=' fmt-10  mb-5'>Answer : In React, useState is a hook that allows you to manage state in a functional component. State is a way to store data that can change over time, and useState allows you to update that data.</p>
                 <div className='border-t-1 border-dashed mb-5'></div>
            </div>

            <div>
                <h1 className='text-xl font-bold mt-10  mb-5'>What is the Purpose of useEffect in React?</h1>
                <p className=' fmt-10  mb-5'>Answer : useEffect is another hook used in React to handle side effects in a component. Side effects are operations like fetching data from an API, updating the DOM, or subscribing to events.</p>
                 <div className='border-t-1 border-dashed mb-5'></div>
            </div>

            <div>
                <h1 className='text-xl font-bold mt-10  mb-5'>What is a Custom Hook in React and When Should You Use One?</h1>
                <p className=' fmt-10  mb-5'>Answer : A custom hook is a JavaScript function that uses React's built-in hooks (like useState, useEffect, etc.) and lets you reuse logic across multiple components. You should use custom hooks when you find yourself repeating the same logic in multiple components.</p>
                 <div className='border-t-1 border-dashed mb-5'></div>
            </div>

            <div>
                <h1 className='text-xl font-bold mt-10  mb-5'>Difference Between Controlled and Uncontrolled Components? Which One is Better?</h1>
                <p className=' fmt-10  mb-5'>Answer : (1) Controlled Components: In these components, the form data is handled by the state within the React component. <br />
                (2) Uncontrolled Components: Here, the form data is handled by the DOM itself, and React does not control the input's value.
                </p>
                 <div className='border-t-1 border-dashed mb-5'></div>
            </div>

            <div>
                <h1 className='text-xl font-bold mt-10  mb-5'>Tell Us Something About useFormStatus() (Explore and Explain)</h1>
                <p className=' fmt-10  mb-5'>Answer : useFormStatus is a custom hook provided by React that helps to manage the submission status of forms. It tells you whether the form is being submitted, if it was successful, or if there was an error.</p>
                 <div className='border-t-1 border-dashed mb-10'></div>
            </div>
        </div>
    );
};

export default Blog;