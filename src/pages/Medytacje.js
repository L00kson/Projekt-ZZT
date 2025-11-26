import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const Medytacje = () => {
  return (
    <AnimatedPage>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                <div>
                    <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Medytacje</h1>
                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Znajdź chwilę dla siebie i odkryj wewnętrzny spokój.</p>
                </div>
                <HeaderActions />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
                <div className="p-8 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 relative overflow-hidden flex flex-col justify-between" style={{minHeight: "250px"}}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-calm-teal/50 via-calm-lavender/40 to-calm-indigo/30 dark:from-calm-teal/30 dark:via-calm-lavender/20 dark:to-calm-indigo/20 opacity-40"></div>
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/1706776/pexels-photo-1706776.jpeg')`, filter: 'blur(4px)', transform: 'scale(1.1)'}}></div>
                    <div className="relative z-10">
                        <h2 className="text-calm-text-light dark:text-white text-2xl md:text-3xl font-bold">Medytacja dnia</h2>
                        <p className="text-calm-text-light dark:text-calm-text-dark mt-2 max-w-lg">Dzisiejsza propozycja: "Uważność oddechu" - prosta technika na odzyskanie spokoju w każdej chwili.</p>
                    </div>
                    <div className="relative z-10 mt-6">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 text-base font-bold text-white bg-calm-teal rounded-lg hover:bg-calm-teal/90 shadow-lg">
                            <span className="material-symbols-outlined">play_circle</span>
                            <span>Odtwórz (10 min)</span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-10">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold leading-tight tracking-tight mb-4">Na stres</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/10/10/14/drop-of-water-1728002_960_720.jpg')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Uwolnij napięcie</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Skanowanie ciała dla relaksu.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">15 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu067Nz_U4xG0xWQMqVdfFeAtJQgTMR-ucZVtyVn8bujyqdRilSF74BfhisRlOwVAsV-Xh1Ji723oeXMDl754YeGEBYrJRyQm2UbYp0WTGtDwD51_6Xwa4KJ4b6YI8EEPSWWLOl1EHvH1-s8tqjieVIkyU8S_2cKBnZmP0P4QYxElk7SAkhWwhV59AE3GB0WABPjPt1wKYH12Jh03HrQjEfIeXknQjk-flF9-LNGyrOz1UF303tHm5Ys_rIDCx01Q45g0XgdqBp7jr')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Spokojny umysł</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Wycisz gonitwę myśli.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">12 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxoNekClb0cl47aXTCkCexO5NyvRZ7EmC9ums_qC_f0DqNUY54pIFA_0Dg4dn_xoY9rXDgv1srAFCr_xDlJUbJxbIjsFL20HGmVhsTrnwWv7jBgqh6CJAgz9aU1rG0fWNeTfR7_f12pKkcoMvruqpfof-vFpGLm1HSf01YI1ksn9ClShJzrG7oAoLwxrszwZLKcC00S64LdZjC08Is3FB-LHDg5Y9he3U1NKAVuiHXuYkG-77NpwdY21EuXz98qDuUHhZE6dgxGhV2')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Wizualizacja bezpieczeństwa</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Znajdź swoje bezpieczne miejsce.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">20 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://images.pexels.com/photos/19783226/pexels-photo-19783226.jpeg')`, backgroundPosition: 'top'}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Chwila oddechu</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Szybka medytacja na teraz.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">5 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold leading-tight tracking-tight mb-4">Na dobry sen</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxoNekClb0cl47aXTCkCexO5NyvRZ7EmC9ums_qC_f0DqNUY54pIFA_0Dg4dn_xoY9rXDgv1srAFCr_xDlJUbJxbIjsFL20HGmVhsTrnwWv7jBgqh6CJAgz9aU1rG0fWNeTfR7_f12pKkcoMvruqpfof-vFpGLm1HSf01YI1ksn9ClShJzrG7oAoLwxrszwZLKcC00S64LdZjC08Is3FB-LHDg5Y9he3U1NKAVuiHXuYkG-77NpwdY21EuXz98qDuUHhZE6dgxGhV2')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Kołysanka dla umysłu</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Delikatne wyciszenie przed snem.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">25 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/10/10/14/drop-of-water-1728002_960_720.jpg')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Głęboki relaks</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Przygotuj ciało do odpoczynku.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">18 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h3 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold leading-tight tracking-tight mb-4">Na skupienie</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <motion.div whileHover={{ y: -5 }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 p-4 flex flex-col">
                            <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu067Nz_U4xG0xWQMqVdfFeAtJQgTMR-ucZVtyVn8bujyqdRilSF74BfhisRlOwVAsV-Xh1Ji723oeXMDl754YeGEBYrJRyQm2UbYp0WTGtDwD51_6Xwa4KJ4b6YI8EEPSWWLOl1EHvH1-s8tqjieVIkyU8S_2cKBnZmP0P4QYxElk7SAkhWwhV59AE3GB0WABPjPt1wKYH12Jh03HrQjEfIeXknQjk-flF9-LNGyrOz1UF303tHm5Ys_rIDCx01Q45g0XgdqBp7jr')`}}></div>
                            <h4 className="font-bold text-calm-text-light dark:text-calm-text-dark flex-grow">Kryształowa jasność</h4>
                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1 mb-4">Osiągnij klarowność myśli.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">10 min</span>
                                <motion.button whileHover={{ scale: 1.1 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-calm-teal/20 text-calm-teal hover:bg-calm-teal/30">
                                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">© 2025 Barometr Nastrojów. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex items-center gap-4">
                        <a className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-teal" href="#">Warunki korzystania z usługi</a>
                        <a className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-teal" href="#">Polityka prywatności</a>
                        <a className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-teal" href="#">Kontakt</a>
                    </div>
                </div>
            </footer>
        </div>
    </AnimatedPage>
  );
};

export default Medytacje;