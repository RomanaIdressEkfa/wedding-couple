import React from 'react';

const Wedding = (props) => {
    const { picture } = props.wedding;
    return (
        <div className=''>
            <img className='w-6/12 mx-auto' src={picture} alt="" />
        </div>

    );
};

export default Wedding;