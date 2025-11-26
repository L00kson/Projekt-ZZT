import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const Pulpit = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    // Data for the weekly chart
    const weeklyData = [
        { day: 'Pon', value: 40, color: 'from-teal-400 to-teal-500' },
        { day: 'Wt', value: 70, color: 'from-purple-400 to-purple-500' },
        { day: 'Śr', value: 50, color: 'from-pink-400 to-pink-500' },
        { day: 'Cz', value: 85, color: 'from-teal-400 to-teal-500' },
        { day: 'Pt', value: 30, color: 'from-blue-400 to-blue-500' },
        { day: 'So', value: 60, color: 'from-pink-400 to-pink-500' },
        { day: 'Nd', value: 75, color: 'from-teal-400 to-teal-500' },
    ];

    const moodOptions = [
        { emoji: "🤩", label: "Świetnie", color: "group-hover:text-green-500" },
        { emoji: "🙂", label: "Dobrze", color: "group-hover:text-teal-500" },
        { emoji: "😐", label: "Okej", color: "group-hover:text-yellow-500" },
        { emoji: "😔", label: "Gorzej", color: "group-hover:text-orange-500" },
        { emoji: "😫", label: "Źle", color: "group-hover:text-red-500" },
    ];

    return (
        <AnimatedPage>
            <div className="relative pb-10">
                {/* Top Bar */}
                <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-text-secondary text-sm font-bold uppercase tracking-widest mb-2 pl-1"
                        >
                            Pulpit
                        </motion.h2>
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-text-primary text-4xl md:text-5xl font-black tracking-tight"
                        >
                            Cześć, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kajetan</span> <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-text-secondary mt-3 text-lg font-medium"
                        >
                            Mamy nadzieję, że Twój dzień mija spokojnie.
                        </motion.p>
                    </div>
                    <HeaderActions />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* --- LEFT COLUMN (Main Interactions) --- */}
                    <div className="lg:col-span-8 space-y-8">
                        
                        {/* Mood Tracker Card*/}
                        <motion.div 
                            className="glass-panel p-8 rounded-[2rem] relative overflow-hidden border-0 ring-1 ring-white/20 dark:ring-white/5"
                            whileHover={{ y: -2, transition: { duration: 0.3 } }}
                        >
                            {/* Decorative background blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-text-primary mb-6">Jak się dzisiaj czujesz?</h3>
                                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
                                    {moodOptions.map((mood, idx) => (
                                        <motion.button
                                            key={idx}
                                            onClick={() => setSelectedMood(idx)}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`group flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28 rounded-2xl transition-all duration-300 border-2
                                                ${selectedMood === idx 
                                                    ? 'bg-white dark:bg-white/10 border-primary shadow-xl shadow-primary/20 scale-105' 
                                                    : 'bg-white/40 dark:bg-white/5 border-transparent hover:border-primary/30 hover:bg-white/80 dark:hover:bg-white/10'
                                                }`}
                                        >
                                            <span className="text-4xl sm:text-5xl mb-3 filter drop-shadow-sm transition-transform group-hover:scale-110">{mood.emoji}</span>
                                            <span className={`text-xs font-bold text-text-secondary transition-colors ${mood.color}`}>{mood.label}</span>
                                        </motion.button>
                                    ))}
                                </div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: selectedMood !== null ? 1 : 0, height: selectedMood !== null ? 'auto' : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch">
                                        <input 
                                            type="text" 
                                            placeholder="Chcesz dodać notatkę?" 
                                            className="flex-grow bg-white/60 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-5 py-3 text-sm outline-none transition-all text-text-primary placeholder:text-text-secondary"
                                        />
                                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/30 transition-all active:scale-95">
                                            Zapisz
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Weekly Report*/}
                        <div className="glass-card p-8 rounded-[2rem] bg-gradient-to-b from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-900/40">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">show_chart</span>
                                        Twój postęp
                                    </h3>
                                    <p className="text-xs text-text-secondary mt-1 font-medium">Tygodniowy trend nastroju</p>
                                </div>
                                <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors uppercase tracking-wide">
                                    Pełny raport
                                </button>
                            </div>
                            
                            {/* Chart Container */}
                            <div className="h-48 w-full flex items-end justify-between gap-3 sm:gap-6 px-2">
                                {weeklyData.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 flex-1 group">
                                        <div className="w-full relative h-40 flex items-end justify-center bg-gray-100/50 dark:bg-white/5 rounded-xl overflow-hidden">
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                animate={{ height: `${item.value}%` }}
                                                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                className={`w-full mx-1 sm:mx-2 rounded-t-lg opacity-90 group-hover:opacity-100 transition-opacity bg-gradient-to-t ${item.color}`}
                                            ></motion.div>
                                        </div>
                                        <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{item.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Access Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="md:col-span-1 glass-card p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group cursor-pointer border-l-4 border-l-blue-400"
                            >
                                <div className="absolute -right-6 -top-6 w-20 h-20 bg-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="mb-4">
                                    <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-3 relative">
                                        <motion.div 
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-blue-500 rounded-full"
                                        />
                                        <span className="material-symbols-outlined relative z-10">air</span>
                                    </div>
                                    <h4 className="font-bold text-text-primary">Ćwiczenie oddechu</h4>
                                    <p className="text-xs text-text-secondary">Uspokój myśli</p>
                                </div>
                                <div className="text-blue-500 text-xs font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform">Start &rarr;</div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="md:col-span-1 glass-card p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group cursor-pointer border-l-4 border-l-orange-400"
                            >
                                <div className="absolute -right-6 -top-6 w-20 h-20 bg-orange-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="mb-4">
                                    <div className="size-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-3">
                                        <span className="material-symbols-outlined">self_improvement</span>
                                    </div>
                                    <h4 className="font-bold text-text-primary">Szybka Medytacja</h4>
                                    <p className="text-xs text-text-secondary">5 min reset</p>
                                </div>
                                <div className="text-orange-500 text-xs font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform">Start &rarr;</div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="md:col-span-1 glass-card p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group cursor-pointer border-l-4 border-l-purple-400"
                            >
                                <div className="absolute -right-6 -top-6 w-20 h-20 bg-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="mb-4">
                                    <div className="size-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-3">
                                        <span className="material-symbols-outlined">edit_note</span>
                                    </div>
                                    <h4 className="font-bold text-text-primary">Dziennik</h4>
                                    <p className="text-xs text-text-secondary">Zapisz myśli</p>
                                </div>
                                <div className="text-purple-500 text-xs font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform">Pisz &rarr;</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Quote Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-[8rem] -rotate-12 leading-none">format_quote</span>
                            </div>
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl font-medium italic leading-relaxed font-serif">
                                    "Spokój to nie brak chaosu, lecz umiejętność zachowania równowagi pośród niego."
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-0.5 w-8 bg-white/50"></div>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-90">Anonim</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Groups List */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-panel p-6 rounded-[2rem]"
                        >
                            <h3 className="text-lg font-bold text-text-primary mb-6 pl-2">Twoje Grupy</h3>
                            <div className="space-y-3">
                                {[
                                    { name: 'Wzrastaj Razem', sub: '2 nowe wiadomości', color: 'bg-teal-500', abbr: 'WR' },
                                    { name: 'Codzienna Uważność', sub: 'Aktywna teraz', color: 'bg-indigo-500', abbr: 'CU' },
                                    { name: 'Sztuka Odpoczynku', sub: 'Aktywna teraz', color: 'bg-pink-500', abbr: 'SO' }
                                ].map((group, i) => (
                                    <motion.div 
                                        key={i} 
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--color-primary), 0.05)" }}
                                        className="flex items-center gap-4 p-3 rounded-2xl transition-colors cursor-pointer group"
                                    >
                                        <div className={`size-12 rounded-full flex items-center justify-center text-white font-bold shadow-md ${group.color} text-sm`}>
                                            {group.abbr}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-text-primary truncate">{group.name}</h4>
                                            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wide mt-0.5">
                                                {group.sub}
                                            </p>
                                        </div>
                                        <span className="material-symbols-outlined text-text-secondary text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-6 pt-2 border-t border-gray-100 dark:border-white/5">
                                <button className="w-full py-3 text-sm font-bold text-white bg-[#2F3545] hover:bg-[#3d4457] dark:bg-white/10 dark:hover:bg-white/20 rounded-xl transition-colors">
                                    Zobacz wszystkie
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Pulpit;