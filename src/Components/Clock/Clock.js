import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [value, setValue] = useState(new Date());
    const current = new Date();
    const dayName = current.toString().split(' ')[0];
    const monthName = current.toString().split(' ')[1];
    const date = `${dayName}, ${current.getDate()} ${monthName} ${current.getFullYear()}`;

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <div className="card w-12/12 lg:w-8/12 bg-base-100 shadow-xl h-full" style={{ backgroundImage: 'url(https://placeimg.com/400/225/arch)', backgroundSize: 'cover' }}>
                    <div className="card-body bg-clock text-gray-300">
                        <div className="flex flex-col md:flex-row justify-center lg:justify-between mx-auto">
                            <Clock value={value}/>
                            <h2 className="card-title text-md lg:text-4xl p-2">{date}</h2>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Clock;