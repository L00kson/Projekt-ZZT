import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeaderActions from '../components/HeaderActions';

const Grupy = () => {
  return (
    <AnimatedPage>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                <div>
                    <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Grupy Wsparcia</h1>
                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Łącz się, dziel i wzrastaj razem z innymi.</p>
                </div>
            <HeaderActions />
            </div>

            <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h2 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold mb-4">Twoje Grupy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/grupa-otwarta">
                            <motion.div whileHover={{y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"}} className="relative p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden h-full cursor-pointer">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-[radial-gradient(ellipse_at_top,_hsla(170,70%,75%,0.3)_0%,_transparent_50%)] z-0"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-calm-teal/20 text-calm-teal"><span className="material-symbols-outlined">local_florist</span></div>
                                        <div>
                                            <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Wzrastaj Razem</h3>
                                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">12 członków • Aktywna</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4 flex-grow">Grupa wsparcia dla osób zmagających się z lękiem społecznym.</p>
                                    <div className="w-full h-9 px-3 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg flex items-center justify-center mt-auto">Otwórz grupę</div>
                                </div>
                            </motion.div>
                        </Link>
                        <Link to="/grupa-otwarta">
                            <motion.div whileHover={{y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"}} className="relative p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden h-full cursor-pointer">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-[radial-gradient(ellipse_at_top,_hsla(260,50%,80%,0.3)_0%,_transparent_50%)] z-0"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-calm-lavender/20 text-calm-lavender"><span className="material-symbols-outlined">self_improvement</span></div>
                                        <div>
                                            <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Codzienna Uważność</h3>
                                            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">28 członków • Aktywna</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4 flex-grow">Dzielimy się praktykami mindfulness i wspieramy się nawzajem.</p>
                                    <div className="w-full h-9 px-3 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg flex items-center justify-center mt-auto">Otwórz grupę</div>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold mb-4">Odkryj Grupy Publiczne</h2>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-grow">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-calm-text-secondary-light dark:text-calm-text-secondary-dark">search</span>
                            <input className="w-full h-11 pl-10 pr-4 bg-calm-card-light dark:bg-calm-card-dark border border-gray-200 dark:border-gray-700/50 rounded-lg text-calm-text-light dark:text-calm-text-dark placeholder:text-calm-text-secondary-light dark:placeholder:text-calm-text-secondary-dark focus:ring-2 focus:ring-calm-teal focus:border-calm-teal text-sm" placeholder="Szukaj grup..." type="text"/>
                        </div>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-2 h-11 px-6 bg-calm-teal text-white text-sm font-bold rounded-lg hover:bg-calm-teal/90 whitespace-nowrap">
                            <span className="material-symbols-outlined text-base">add</span>
                            <span>Stwórz nową grupę</span>
                        </motion.button>
                    </div>
                    <div className="space-y-4">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-4 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-full bg-calm-indigo/10 dark:bg-calm-indigo/20 text-calm-indigo dark:text-calm-lavender"><span className="material-symbols-outlined">brightness_4</span></div>
                                <div>
                                    <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Sztuka Odpoczynku</h3>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Techniki relaksacyjne i walka z bezsennością. • 54 członków</p>
                                </div>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} className="h-9 px-4 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg hover:bg-calm-teal/20 dark:hover:bg-calm-teal/30 whitespace-nowrap">Dołącz</motion.button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="p-4 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-full bg-calm-indigo/10 dark:bg-calm-indigo/20 text-calm-indigo dark:text-calm-lavender"><span className="material-symbols-outlined">diversity_3</span></div>
                                <div>
                                    <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Pozytywne Relacje</h3>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Budowanie i utrzymywanie zdrowych relacji międzyludzkich. • 89 członków</p>
                                </div>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} className="h-9 px-4 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg hover:bg-calm-teal/20 dark:hover:bg-calm-teal/30 whitespace-nowrap">Dołącz</motion.button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="p-4 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-full bg-calm-indigo/10 dark:bg-calm-indigo/20 text-calm-indigo dark:text-calm-lavender"><span className="material-symbols-outlined">work</span></div>
                                <div>
                                    <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Wypalenie Zawodowe Stop</h3>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Wsparcie dla osób doświadczających wypalenia zawodowego. • 41 członków</p>
                                </div>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} className="h-9 px-4 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg hover:bg-calm-teal/20 dark:hover:bg-calm-teal/30 whitespace-nowrap">Dołącz</motion.button>
                        </motion.div>
                    </div>
                </motion.div>
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

export default Grupy;