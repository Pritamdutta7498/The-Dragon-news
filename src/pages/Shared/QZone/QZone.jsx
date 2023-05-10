import React from 'react';
import logo1 from '../../../assets/qZone1.png';
import logo2 from '../../../assets/qZone2.png';
import logo3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='mt-4 rounded-3 bg-secondary text-center py-4'>
           <h1>QZone</h1>
           <div>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
           </div>

        </div>
    );
};

export default QZone;