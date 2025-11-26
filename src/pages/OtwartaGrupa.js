import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const OtwartaGrupa = () => {
    const [activeTab, setActiveTab] = useState('Rozmowa');
    const tabs = ['Rozmowa', 'Porady', 'Zasoby', 'Ankiety', 'Ogłoszenia'];

    const ContentCard = ({ icon, title, text, author, delay }) => (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="relative flex flex-col text-left w-full h-full bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 cursor-pointer"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-calm-lavender/10 text-calm-lavender">
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark">{title}</h3>
            </div>
            <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark flex-grow">{text}</p>
            <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                Stworzone przez: <span className="font-semibold">{author}</span>
            </p>
        </motion.button>
    );

    const renderTabContent = () => (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
            >
                {activeTab === 'Rozmowa' && (
                    <>
                        <div className="p-6 space-y-6 overflow-y-auto" style={{maxHeight: 'calc(100vh - 420px)', minHeight: '300px'}}>
                            <div className="flex items-start gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: `url("https://i.pinimg.com/736x/91/61/56/916156f4b8419ac9f289e7749fb3d15b.jpg")`}}></div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-calm-text-light dark:text-calm-text-dark">Katarzyna</p>
                                        <span className="text-xs font-medium bg-calm-lavender/20 text-calm-lavender px-2 py-0.5 rounded-full">Lider</span>
                                        <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">14:20</p>
                                    </div>
                                    <div className="mt-1 p-3 rounded-lg rounded-tl-none bg-gray-100 dark:bg-calm-dark-bg text-sm text-calm-text-light dark:text-calm-text-dark">
                                        Cześć wszystkim! Jak się dzisiaj czujecie? Pamiętajcie, że to bezpieczna przestrzeń do dzielenia się.
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="order-1">
                                    <p className="font-bold text-calm-text-light dark:text-calm-text-dark text-right">Ty</p>
                                    <div className="mt-1 p-3 rounded-lg rounded-tr-none bg-calm-teal/20 dark:bg-calm-teal/30 text-sm text-calm-text-light dark:text-calm-text-dark">
                                        Dzięki, Katarzyno! Dzisiaj trochę lepiej. Skupiłem się na oddechu, co bardzo pomogło.
                                    </div>
                                    <div className="flex justify-end gap-2 mt-2">
                                        <motion.button whileHover={{scale: 1.15}} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-calm-teal/10 text-calm-teal">👍 <span className="font-semibold">2</span></motion.button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: `url("https://i.pinimg.com/736x/69/d4/f5/69d4f553a801270cc080e78402855353.jpg")`}}></div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-calm-text-light dark:text-calm-text-dark">Marcin</p>
                                        <span className="text-xs font-medium bg-calm-indigo/20 text-calm-indigo dark:text-calm-text-secondary-dark px-2 py-0.5 rounded-full">Moderator</span>
                                        <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">14:25</p>
                                    </div>
                                    <div className="mt-1 p-3 rounded-lg rounded-tl-none bg-gray-100 dark:bg-calm-dark-bg text-sm text-calm-text-light dark:text-calm-text-dark">
                                        To świetna wiadomość! Kontrolowany oddech to potężne narzędzie.
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <motion.button whileHover={{scale: 1.15}} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-calm-teal/10 text-calm-teal">🧘 <span className="font-semibold">5</span></motion.button>
                                        <motion.button whileHover={{scale: 1.15}} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-calm-teal/10 text-calm-teal">❤️ <span className="font-semibold">3</span></motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700/50">
                            <div className="flex items-center gap-2 mb-2 text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">
                                <span className="material-symbols-outlined text-base">slow_motion_video</span>
                                <span>Aktywny tryb powolny: możesz wysłać 1 wiadomość na minutę.</span>
                            </div>
                            <div className="relative">
                                <input className="w-full h-11 pl-4 pr-24 bg-gray-100 dark:bg-calm-dark-bg border border-gray-200 dark:border-gray-700/50 rounded-lg text-calm-text-light dark:text-calm-text-dark placeholder:text-calm-text-secondary-light dark:placeholder:text-calm-text-secondary-dark focus:ring-2 focus:ring-calm-teal focus:border-calm-teal text-sm" placeholder="Napisz wiadomość..." type="text"/>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <button className="size-8 rounded-full hover:bg-calm-teal/10 text-calm-text-secondary-light dark:text-calm-text-secondary-dark flex items-center justify-center"><span className="material-symbols-outlined text-xl">mood</span></button>
                                    <button className="size-8 rounded-full bg-calm-teal text-white flex items-center justify-center"><span className="material-symbols-outlined text-xl">send</span></button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'Porady' && (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContentCard icon="lightbulb" title="Sposób na poranny stres" text="Zacznij dzień od 5 minut spokojnego oddechu, zanim sprawdzisz telefon. To ustawia ton na resztę dnia." author="Katarzyna" delay={0.1} />
                        <ContentCard icon="self_improvement" title="Technika 'Uziemienia' 5-4-3-2-1" text="Kiedy czujesz narastający lęk, wymień 5 rzeczy, które widzisz, 4 które czujesz, 3 które słyszysz, 2 które wąchasz i 1, którą możesz posmakować." author="Marcin" delay={0.2} />
                    </div>
                )}
                {activeTab === 'Zasoby' && (
                     <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContentCard icon="movie" title="Film o radzeniu sobie z lękiem" text="Polecam obejrzeć 'Minimalism' na Netflix. Pomaga uporządkować nie tylko przestrzeń, ale i myśli." author="Katarzyna" delay={0.1} />
                        <ContentCard icon="menu_book" title="Książka: 'Siła nawyku'" text="Ta książka zmieniła moje podejście do budowania małych, pozytywnych rutyn. Dostępna w każdej dobrej księgarni." author="Marcin" delay={0.2} />
                    </div>
                )}
                {activeTab === 'Ankiety' && <div className="p-6 text-center text-calm-text-secondary-light">Brak aktywnych ankiet.</div>}
                {activeTab === 'Ogłoszenia' && <div className="p-6 text-center text-calm-text-secondary-light">Brak nowych ogłoszeń.</div>}
            </motion.div>
        </AnimatePresence>
    );

    return (
        <AnimatedPage>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 xl:col-span-8">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 overflow-hidden mb-6">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-[radial-gradient(ellipse_at_top,_hsla(260,50%,80%,0.3)_0%,_transparent_50%)] pointer-events-none z-0 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="flex flex-wrap justify-between items-start gap-4">
                                <div>
                                    <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Codzienna Uważność</h1>
                                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Dzielimy się praktykami mindfulness i wspieramy się nawzajem.</p>
                                    <div className="flex items-center gap-4 mt-3 text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">
                                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">group</span><span>30/50 członków</span></div>
                                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">public</span><span>Grupa otwarta</span></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <motion.button whileHover={{scale: 1.05}} className="h-9 px-3 bg-calm-teal/10 dark:bg-calm-teal/20 text-calm-teal text-sm font-bold rounded-lg hover:bg-calm-teal/20 dark:hover:bg-calm-teal/30 flex items-center gap-1.5"><span className="material-symbols-outlined text-base">person_add</span><span>Zaproś</span></motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Tabs */}
                    <div className="mb-6 border-b border-gray-200 dark:border-gray-700/50">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative whitespace-nowrap py-3 px-1 font-medium text-sm transition-colors ${activeTab === tab ? 'text-calm-teal' : 'text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-text-light dark:hover:text-calm-text-dark'}`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-calm-teal" layoutId="underline" />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Chat and Content Area */}
                    <motion.div layout transition={{ duration: 0.3, ease: 'easeOut' }} className="bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col">
                        {renderTabContent()}
                    </motion.div>
                </div>

                <div className="col-span-12 xl:col-span-4 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50">
                        <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark mb-4">Cotygodniowy temat</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Jakie małe zwycięstwo odnieśliście w tym tygodniu, które poprawiło Wam nastrój?</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50">
                        <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark mb-4">Statystyki nastrojów grupy</h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                            <div className="bg-calm-teal h-2.5 rounded-full" style={{width: "60%"}}></div>
                        </div>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark">60% członków grupy czuje się dziś spokojnie.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-calm-text-light dark:text-calm-text-dark">Członkowie (30)</h3>
                            <a className="text-sm font-medium text-calm-teal hover:underline" href="#">Zobacz wszystkich</a>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: `url("https://i.pinimg.com/736x/91/61/56/916156f4b8419ac9f289e7749fb3d15b.jpg")`}}></div>
                                    <div>
                                        <p className="font-semibold text-sm text-calm-text-light dark:text-calm-text-dark">Katarzyna</p>
                                        <p className="text-xs text-calm-lavender">Lider</p>
                                    </div>
                                </div>
                                <button className="size-7 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center text-calm-text-secondary-light dark:text-calm-text-secondary-dark"><span className="material-symbols-outlined text-lg">more_horiz</span></button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: `url("https://i.pinimg.com/736x/69/d4/f5/69d4f553a801270cc080e78402855353.jpg")`}}></div>
                                    <div>
                                        <p className="font-semibold text-sm text-calm-text-light dark:text-calm-text-dark">Marcin</p>
                                        <p className="text-xs text-calm-indigo dark:text-calm-text-secondary-dark">Moderator</p>
                                    </div>
                                </div>
                                <button className="size-7 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center text-calm-text-secondary-light dark:text-calm-text-secondary-dark"><span className="material-symbols-outlined text-lg">more_horiz</span></button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: `url("https://cdn.discordapp.com/avatars/647126037385183235/f45e7fa900a1a62353c870b112b26592.webp?size=80")`}}></div>
                                    <div>
                                        <p className="font-semibold text-sm text-calm-text-light dark:text-calm-text-dark">Ty</p>
                                        <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Członek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default OtwartaGrupa;