import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion"

function Email() {
    return (
        <motion.div
            className='email'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 2.3
            }}>
            <Link href="mailto:BrozennVN@gmail.com" className='email-link'>BrozennVN@gmail.com</Link>
        </motion.div>
    );
}

export default Email;