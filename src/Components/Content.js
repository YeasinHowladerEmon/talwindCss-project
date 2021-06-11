import React from 'react';
import beef1 from '../images/download.jpg';
import beef2 from '../images/download (1).jpg'
import beef3 from '../images/images.jpg'
const Content = () => {
    return (
        <>
            <div className='card'>
                <img src={beef1} alt="egg" className='h-full rounded mb-20 shadow'/>
                <div className='card-body'>
                    <h2 className='text-2xl mb-2'>perfect beef Roast</h2>
                    <p>crispy and delicious</p>
                    <span>70$</span>
                </div>
            </div>
            <div className='card'>
                <img src={beef2} alt="egg" className='h-full rounded mb-20 shadow'/>
                <div className='card-body'>
                    <h2 className='text-2xl mb-2'>perfect beef Roast</h2>
                    <p>crispy and delicious</p>
                    <span>70$</span>
                </div>
            </div>
            <div className='card'>
                <img src={beef3} alt="egg" className='h-full rounded mb-20 shadow'/>
                <div className='card-body'>
                    <h2 className='text-2xl mb-2'>perfect beef Roast</h2>
                    <p>crispy and delicious</p>
                    <span>70$</span>
                </div>
            </div>
        </>
    );
};

export default Content;