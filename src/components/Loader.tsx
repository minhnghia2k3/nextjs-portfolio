import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
    useEffect(() => {
        setTimeout(() => setIsLoading(), 1000)
    }, [setIsLoading])
    return (
        <AnimatePresence>
            {isLoading && (

                <motion.div
                    className="loader"
                    exit={{ scale: 0 }}
                    key="motiondivleave"
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut"
                    }}>
                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <title>Loader</title>
                        <g>
                            <g id="K" transform="translate(35.000000, 35.000000)">
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                    fill="currentColor"
                                    d="M 23.835938 2.902344 L 20.167969 2.902344 C 19.878906 2.902344 19.644531 3.140625 19.644531 3.429688 L 19.644531 17.683594 L 19.554688 17.683594 L 9.808594 3.125 C 9.710938 2.984375 9.523438 2.902344 9.351562 2.902344 L 6.019531 2.902344 C 5.726562 2.902344 5.492188 3.140625 5.492188 3.429688 L 5.492188 25.601562 C 5.492188 25.894531 5.726562 26.128906 6.019531 26.128906 L 9.6875 26.128906 C 9.976562 26.128906 10.210938 25.894531 10.210938 25.601562 L 10.210938 11.347656 L 10.300781 11.347656 L 20.046875 25.90625 C 20.144531 26.046875 20.347656 26.128906 20.515625 26.128906 L 23.835938 26.128906 C 24.125 26.128906 24.359375 25.894531 24.359375 25.601562 L 24.359375 3.429688 C 24.359375 3.140625 24.125 2.902344 23.835938 2.902344 Z M 23.835938 2.902344 "
                                />
                            </g>
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
                            />
                        </g>
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loader;