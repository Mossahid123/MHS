import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, picture, retting } = reviews;
    return (
        <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg">
            <div class="flex justify-center -mt-16 md:justify-end">
                <img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full " alt="Testimonial avatar" src={picture} />
            </div>
            <h2 class="mt-2 text-1xl font-semibold text-gray-800  md:mt-0 md:text-3xl">{name}</h2>
            <p class="mt-2 text-gray-600 dark:text-gray-200">{review}</p>
            <div class="flex justify-end mt-4">
                <p  class="text-xl font-medium text-blue-500">Retting : {retting}</p>
            </div>
        </div>
    );
};

export default Review;