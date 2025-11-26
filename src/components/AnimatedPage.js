import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, y: 10, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.99 },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;