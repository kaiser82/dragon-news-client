import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Our Terms and conditions</h3>
            <p>Back to : <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndConditions;