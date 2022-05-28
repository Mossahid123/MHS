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
            <h1 className="text-5xl text-center mb-10 font-bold">Welcom To Our World</h1>
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