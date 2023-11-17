import React from 'react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            className='contact'
            id='contact'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="contact-title">What&apos;s next</div>
            <div className="contact-sub-title">Get in touch</div>
            <p className="contact-text">
                {/* Although
                I&apos;m not currently looking for any new opportunities,
                my inbox is always open.
                Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you! */}
                I&apos;m currently looking for a new opportunity.
                If you have a position that you think I&apos;d be a good fit for,
                please feel free to reach out to me.
            </p>
            <div className="contact-cta">
                <Button text="Contact" link="https://zalo.me/0397838728" />
            </div>
        </motion.div>
    );
}

export default Contact;