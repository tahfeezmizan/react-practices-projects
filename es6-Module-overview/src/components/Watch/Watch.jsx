import React from 'react';

const Watch = ({ watch }) => {
    const { model, price } = watch;
    console.log(watch)
    return (
        <div>
            <h3>Watch Brand: {model}</h3>
            <p>Watch Price: {price}</p>
        </div>
    );
};

export default Watch;