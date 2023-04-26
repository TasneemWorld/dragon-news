import React from 'react';
import qZoon1 from '../../../assets/qZone1.png'
import qZoon2 from '../../../assets/qZone2.png'
import qZoon3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='text-center bg-light my-4 py-5'>
            <h4 className=''>Q-Zoon</h4>
            <div className=''>
                <img src={qZoon1} alt="" />
                <img src={qZoon2} alt="" />
                <img src={qZoon3} alt="" />
            </div>
        </div>
    );
};

export default QZone;