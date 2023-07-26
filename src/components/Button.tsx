import React from 'react';
import Link from 'next/link';
function Button({ text, link }: { text: string, link: string }) {
    return (
        <Link href={link} className='btn'>
            {text}
        </Link>
    );
}

export default Button;