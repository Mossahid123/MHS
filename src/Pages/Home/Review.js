import React from 'react';

const Review = ({ reviews }) => {
    const { review, name, picture, retting } = reviews;
    return (

        <a
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg">
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div class="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-gray-900">
                      <span className='font-semibold'> Customer's Name :</span> {name}
                    </h5>
                </div>

            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                  <span className='text-1xl font-semibold text-black'> Comment : </span>{review}
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">{retting}</dt>
                    <dd className="text-xs text-gray-500">Retting </dd>
                </div>
            </dl>
        </a>

    );
};

export default Review;