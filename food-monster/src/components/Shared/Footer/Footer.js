import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center' style={{ backgroundColor: `#efefed`}}>
            <p className='font-normal'>Copyright © <span className='color-red'><Link to="/">Food Monster</Link></span> 2022. All rights reserved.</p>
        </div>
    );
};

export default Footer;