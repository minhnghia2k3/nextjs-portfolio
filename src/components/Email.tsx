import Link from 'next/link';
import React from 'react';

function Email() {
    return (
        <div className='email'>
            <Link href="mailto:BrozennVN@gmail.com" className='email-link'>BrozennVN@gmail.com</Link>
        </div>
    );
}

export default Email;