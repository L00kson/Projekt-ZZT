import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeaderActions from '../components/HeaderActions';

const Profil = () => {
  return (
    <AnimatedPage>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                <div>
                    <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Twój Profil</h1>
                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Zarządzaj informacjami o koncie i preferencjami.</p>
                </div>
                <HeaderActions />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
                    <div className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 mb-8">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative">
                                <motion.div whileHover={{ scale: 1.05 }} className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24" style={{backgroundImage: `url("https://cdn.discordapp.com/avatars/647126037385183235/f45e7fa900a1a62353c870b112b26592.webp?size=80")`}}></motion.div>
                                <Link to="/ustawienia?tab=Ustawienia Konta">
                                    <motion.div whileHover={{ scale: 1.1, rotate: 15 }} className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-calm-teal text-white rounded-full hover:bg-calm-teal/90 cursor-pointer">
                                        <span className="material-symbols-outlined text-base">edit</span>
                                    </motion.div>
                                </Link>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-calm-text-light dark:text-calm-text-dark">Kajetan Kowalczyk</h2>
                                <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">kajetan.kowalczyk@example.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mb-4">Ustawienia Konta</h3>
                            <div className="space-y-4">
                                <motion.div whileHover={{ x: 5 }}>
                                    <Link to="/ustawienia?tab=Ustawienia Konta" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">account_circle</span>
                                            <div>
                                                <p className="font-semibold text-calm-text-light dark:text-calm-text-dark">Dane osobowe</p>
                                                <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Edytuj swoje imię, e-mail i hasło</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">chevron_right</span>
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ x: 5 }}>
                                    <Link to="/ustawienia?tab=Prywatność" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
                                       <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">lock</span>
                                            <div>
                                                <p className="font-semibold text-calm-text-light dark:text-calm-text-dark">Prywatność i bezpieczeństwo</p>
                                                <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Zarządzaj udostępnianiem danych i bezpieczeństwem</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">chevron_right</span>
                                    </Link>
                                </motion.div>
                                 <motion.div whileHover={{ x: 5 }}>
                                    <Link to="/ustawienia?tab=Powiadomienia" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
                                       <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">notifications_active</span>
                                            <div>
                                                <p className="font-semibold text-calm-text-light dark:text-calm-text-dark">Preferencje powiadomień</p>
                                                <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Wybierz, jak chcesz otrzymywać powiadomienia</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">chevron_right</span>
                                    </Link>
                                </motion.div>
                                 <motion.div whileHover={{ x: 5 }}>
                                    <a href="#" className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
                                       <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-red-500">logout</span>
                                            <div>
                                                <p className="font-semibold text-red-600 dark:text-red-500">Wyloguj</p>
                                                <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Zakończ swoją obecną sesję</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-calm-text-secondary-light dark:text-calm-text-secondary-dark">chevron_right</span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-1">
                    <div className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 mb-8">
                        <h3 className="text-calm-text-light dark:text-calm-text-dark text-lg font-bold leading-tight mb-4">Podsumowanie Postępów</h3>
                        <div className="space-y-5">
                            <div className="flex items-center p-4 rounded-lg" style={{background: 'linear-gradient(135deg, rgba(118, 201, 192, 0.2), rgba(177, 162, 202, 0.2), rgba(19, 200, 236, 0.2))'}}>
                                <div className="flex items-center justify-center w-12 h-12 bg-calm-teal/30 rounded-full mr-4">
                                    <span className="material-symbols-outlined text-calm-teal text-3xl">local_fire_department</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-calm-text-light dark:text-calm-text-dark">14 dni</p>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Seria wpisów do dziennika</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg" style={{background: 'linear-gradient(135deg, rgba(118, 201, 192, 0.2), rgba(177, 162, 202, 0.2), rgba(19, 200, 236, 0.2))'}}>
                                <div className="flex items-center justify-center w-12 h-12 bg-calm-lavender/30 rounded-full mr-4">
                                    <span className="material-symbols-outlined text-calm-lavender text-3xl">mood</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-calm-text-light dark:text-calm-text-dark">72%</p>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Pozytywny nastrój</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg" style={{background: 'linear-gradient(135deg, rgba(118, 201, 192, 0.2), rgba(177, 162, 202, 0.2), rgba(19, 200, 236, 0.2))'}}>
                                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mr-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">star</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-calm-text-light dark:text-calm-text-dark">28</p>
                                    <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Małych osiągnięć</p>
                                </div>
                            </div>
                        </div>
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

export default Profil;