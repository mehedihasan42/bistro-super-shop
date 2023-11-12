import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center my-6'>
            <p className='text-[#D99904]'>{subHeading}</p>
            <h1 className='text-3xl mt-2 border-y-2 w-64 mx-auto'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;