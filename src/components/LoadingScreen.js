import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-calm-light-bg dark:bg-calm-dark-bg">
            <motion.img
                src="/logo512.png"
                alt="Barometr Nastrojów Logo"
                className="w-24 h-24 object-contain"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <motion.h1 
                className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Barometr Nastrojów
            </motion.h1>
        </div>
    );
};

export default LoadingScreen;