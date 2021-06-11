import React from 'react';
import { Link } from 'react-router-dom';

const fn = () => {
    return (
        <div>
            This is the other page.
            <Link to="/">HOME</Link>
        </div>
    );
};

export default fn;

