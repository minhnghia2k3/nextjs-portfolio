import React from 'react';
import Link from 'next/link';
function Button({ text, link, disabled }: { text: string, link: string, disabled?: boolean }) {
    return (
        <Link href={link} className={disabled ? "btn disabled-link" : "btn"} target="_blank">
            {text}
        </Link>
    );
}

export default Button;