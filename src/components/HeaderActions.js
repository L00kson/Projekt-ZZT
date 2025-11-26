import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderActions = () => {
    const [isOpen, setIsOpen] = useState(null); // 'notifications' or 'profile' or null
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggle = (menu) => setIsOpen(isOpen === menu ? null : menu);

    const dropdownClasses = "absolute right-0 mt-3 bg-white/90 dark:bg-[#1e2330]/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl z-50 shadow-2xl overflow-hidden";

    return (
        <div className="flex items-center gap-3 md:gap-4" ref={ref}>
            {/* Notification Bell */}
            <div className="relative">
                <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggle('notifications')}
                    className={`relative p-2.5 rounded-full transition-all duration-300 ${isOpen === 'notifications' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-white/5 text-text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-white/10 border border-transparent dark:border-white/5'}`}
                >
                    <span className="material-symbols-outlined text-xl md:text-2xl">notifications</span>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1e2330]"></span>
                </motion.button>

                <AnimatePresence>
                    {isOpen === 'notifications' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`${dropdownClasses} w-80`}
                        >
                            <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-white/5">
                                <h3 className="font-bold text-text-primary">Powiadomienia</h3>
                                <button className="text-xs text-primary font-bold hover:text-accent transition-colors">Wyczyść</button>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {[1, 2].map((i) => (
                                    <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0 cursor-pointer group">
                                        <div className="flex gap-3">
                                            <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                            <div>
                                                <p className="text-sm text-text-primary font-medium leading-snug">Nowa wiadomość w grupie "Wzrastaj Razem"</p>
                                                <p className="text-xs text-text-secondary mt-1">{i * 15} min temu</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
                <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggle('profile')}
                    className={`flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border transition-all duration-300 ${isOpen === 'profile' ? 'bg-white dark:bg-white/10 border-primary ring-2 ring-primary/10' : 'bg-white dark:bg-white/5 border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'}`}
                >
                    <div className="w-9 h-9 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-600 shadow-sm" 
                         style={{backgroundImage: `url("https://cdn.discordapp.com/avatars/647126037385183235/f45e7fa900a1a62353c870b112b26592.webp?size=80")`}}>
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-text-primary leading-none">Kajetan</p>
                    </div>
                    <span className={`material-symbols-outlined text-text-secondary text-xl transition-transform duration-300 ${isOpen === 'profile' ? 'rotate-180 text-primary' : ''}`}>expand_more</span>
                </motion.button>

                <AnimatePresence>
                    {isOpen === 'profile' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`${dropdownClasses} w-64 right-0 p-2`}
                        >
                            <Link to="/profil" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 text-text-secondary hover:text-primary transition-all group" onClick={() => setIsOpen(null)}>
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <span className="text-sm font-bold">Mój Profil</span>
                            </Link>
                            <Link to="/ustawienia" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 text-text-secondary hover:text-primary transition-all group" onClick={() => setIsOpen(null)}>
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined">settings</span>
                                </div>
                                <span className="text-sm font-bold">Ustawienia</span>
                            </Link>
                            <div className="h-px bg-gray-100 dark:bg-gray-700 my-1 mx-2"></div>
                            <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-text-secondary hover:text-red-500 transition-all text-left group">
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-red-500/10 transition-colors">
                                    <span className="material-symbols-outlined">logout</span>
                                </div>
                                <span className="text-sm font-bold">Wyloguj</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeaderActions;