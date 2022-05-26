import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts , setParts] =useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data) )
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
              parts.slice(0 , 6).map(part => <PartsCard
              key={part._id}
              part={part}
              ></PartsCard>)
          }
        </div>
    );
};

export default Parts;