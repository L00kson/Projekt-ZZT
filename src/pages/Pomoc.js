import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const Pomoc = () => {
  return (
    <AnimatedPage>
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-calm-text-light dark:text-calm-text-dark text-4xl font-bold leading-tight tracking-tight">Jak możemy Ci pomóc?</h1>
                <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-3 max-w-2xl mx-auto">Jesteśmy tutaj, aby Cię wspierać. Znajdź odpowiedzi na swoje pytania lub skontaktuj się z nami, jeśli potrzebujesz dalszej pomocy.</p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative max-w-2xl mx-auto mb-12">
                <input className="w-full py-3 pl-12 pr-4 bg-calm-card-light dark:bg-calm-card-dark border border-gray-200 dark:border-gray-700/50 rounded-xl text-calm-text-light dark:text-calm-text-dark placeholder:text-calm-text-secondary-light dark:placeholder:text-calm-text-secondary-dark focus:ring-2 focus:ring-calm-teal focus:border-calm-teal" placeholder="Szukaj tematów pomocy..." type="search"/>
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-calm-text-secondary-light dark:text-calm-text-secondary-dark">search</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{y: -5}} href="#" className="block p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:border-calm-teal/50 dark:hover:border-calm-teal/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-calm-teal mb-3">quiz</span>
                    <h3 className="font-bold text-lg text-calm-text-light dark:text-calm-text-dark">Często zadawane pytania</h3>
                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Znajdź odpowiedzi na najczęściej zadawane pytania.</p>
                </motion.a>
                <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{y: -5}} href="#" className="block p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:border-calm-teal/50 dark:hover:border-calm-teal/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-calm-lavender mb-3">contact_support</span>
                    <h3 className="font-bold text-lg text-calm-text-light dark:text-calm-text-dark">Kontakt z pomocą techniczną</h3>
                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Skontaktuj się z naszym zespołem wsparcia technicznego.</p>
                </motion.a>
                <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{y: -5}} href="#" className="block p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:border-calm-teal/50 dark:hover:border-calm-teal/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl text-calm-teal mb-3">school</span>
                    <h3 className="font-bold text-lg text-calm-text-light dark:text-calm-text-dark">Przewodniki i samouczki</h3>
                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Dowiedz się, jak w pełni wykorzystać możliwości aplikacji.</p>
                </motion.a>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-8 bg-calm-lavender/10 dark:bg-calm-lavender/20 rounded-xl border border-calm-lavender/20 dark:border-calm-lavender/30 text-center">
                <span className="material-symbols-outlined text-4xl text-calm-indigo dark:text-calm-lavender mb-3">emergency</span>
                <h2 className="text-2xl font-bold text-calm-text-light dark:text-white mb-2">Potrzebujesz natychmiastowej pomocy?</h2>
                <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-6 max-w-xl mx-auto">Jeśli jesteś w kryzysie lub potrzebujesz z kimś pilnie porozmawiać, poniższe linie wsparcia są dostępne 24/7.</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-calm-indigo text-white text-sm font-bold leading-normal hover:bg-calm-indigo/90" href="tel:116123">
                        <span className="truncate">Kryzysowy Telefon Zaufania: 116 123</span>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-calm-card-light dark:bg-calm-card-dark text-calm-indigo dark:text-white text-sm font-bold leading-normal border border-calm-indigo/20 hover:bg-gray-50 dark:hover:bg-white/5" href="tel:116111">
                        <span className="truncate">Telefon Zaufania dla Dzieci i Młodzieży: 116 111</span>
                    </motion.a>
                </div>
            </motion.div>
        </div>
    </AnimatedPage>
  );
};

export default Pomoc;