import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-forest-96916.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='mx-10 mt-10'>
            <h1 className="text-5xl text-center mb-10 font-bold drop-shadow-lg">Welcom To <span className='text-blue-500'> Our World</span> </h1>
            <h2 className='text-2xl font-extrabold drop-shadow-lg mb-2'>NEW <span className='text-blue-500'>ARRIVALS</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.slice(0, 6).map(part => <PartsCard
                        key={part._id}
                        part={part}
                    ></PartsCard>)
                }
            </div>
        </div>
    );
};

export default Parts;