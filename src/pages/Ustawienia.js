import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleSwitch = ({ label, description, enabled, setEnabled }) => (
    <div className="flex items-center justify-between">
        <div>
            <h4 className="font-semibold text-text-primary">{label}</h4>
            <p className="text-xs text-text-secondary">{description}</p>
        </div>
        <div 
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${enabled ? 'bg-primary justify-end' : 'bg-border-color justify-start'}`}
        >
            <motion.div 
                className="w-4 h-4 bg-white rounded-full shadow-md" 
                layout 
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
        </div>
    </div>
);

const Ustawienia = () => {
    const { theme, setTheme, themeNames } = useContext(ThemeContext);
    const location = useLocation();
    const tabs = ['Ustawienia Konta', 'Prywatność', 'Powiadomienia', 'Wygląd', 'Zarządzanie Danymi'];
    const tabIcons = ['account_circle', 'lock', 'notifications', 'palette', 'database'];

    const getInitialTab = () => {
        const params = new URLSearchParams(location.search);
        const tabFromUrl = params.get('tab');
        if (tabFromUrl && tabs.includes(tabFromUrl)) {
            return tabFromUrl;
        }
        return 'Ustawienia Konta';
    };

    const [activeTab, setActiveTab] = useState(getInitialTab);

    const [isProfilePublic, setProfilePublic] = useState(false);
    const [showActivity, setShowActivity] = useState(true);
    const [allowInvites, setAllowInvites] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [groupMessages, setGroupMessages] = useState(true);

    const renderTabContent = () => (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
            >
                {activeTab === 'Ustawienia Konta' && (
                    <div>
                        <div className="p-6 border-b border-border-color">
                            <h2 className="text-xl font-bold text-text-primary">Ustawienia Konta</h2>
                            <p className="text-sm text-text-secondary mt-1">Zaktualizuj swoje dane osobowe i informacje o koncie.</p>
                        </div>
                        <div className="p-6 space-y-8">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="sm:w-1/3">
                                    <h3 className="font-semibold text-text-primary">Zdjęcie profilowe</h3>
                                    <p className="text-xs text-text-secondary mt-1">Zaktualizuj swoje zdjęcie profilowe.</p>
                                </div>
                                <div className="sm:w-2/3 flex items-center gap-4">
                                    <motion.div whileHover={{ scale: 1.05 }} className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16" style={{backgroundImage: `url("https://cdn.discordapp.com/avatars/647126037385183235/f45e7fa900a1a62353c870b112b26592.webp?size=80")`}}></motion.div>
                                    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="flex items-center justify-center px-4 h-9 text-sm font-medium rounded-md border border-border-color text-text-primary hover:bg-card">Zmień</motion.button>
                                    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="flex items-center justify-center px-4 h-9 text-sm font-medium rounded-md text-red-600 dark:text-red-500 hover:bg-red-500/10">Usuń</motion.button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="sm:w-1/3">
                                    <h3 className="font-semibold text-text-primary">Adres e-mail</h3>
                                    <p className="text-xs text-text-secondary mt-1">Twój adres e-mail powiązany z kontem.</p>
                                </div>
                                <div className="sm:w-2/3">
                                    <input className="w-full bg-background border-border-color rounded-md text-text-primary text-sm focus:ring-primary focus:border-primary" disabled type="email" value="kajetan.kowalczyk@example.com"/>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="sm:w-1/3">
                                    <h3 className="font-semibold text-text-primary">Hasło</h3>
                                    <p className="text-xs text-text-secondary mt-1">Zmień swoje hasło. Zalecamy używanie silnego, unikalnego hasła.</p>
                                </div>
                                <div className="sm:w-2/3">
                                    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="flex items-center justify-center px-4 h-9 text-sm font-medium rounded-md border border-border-color text-text-primary hover:bg-card">Zmień hasło</motion.button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-background rounded-b-xl flex justify-end">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold">
                                Zapisz zmiany
                            </motion.button>
                        </div>
                    </div>
                )}
                {activeTab === 'Prywatność' && (
                    <div>
                        <div className="p-6 border-b border-border-color">
                             <h2 className="text-xl font-bold text-text-primary">Prywatność</h2>
                             <p className="text-sm text-text-secondary mt-1">Zarządzaj tym, co widzą inni użytkownicy.</p>
                        </div>
                         <div className="p-6 space-y-6">
                            <ToggleSwitch label="Profil publiczny" description="Zezwól innym na wyszukanie i przeglądanie Twojego profilu." enabled={isProfilePublic} setEnabled={setProfilePublic} />
                            <ToggleSwitch label="Pokazuj status aktywności" description="Inni będą widzieć, kiedy jesteś online." enabled={showActivity} setEnabled={setShowActivity} />
                            <ToggleSwitch label="Zezwalaj na zaproszenia do grup" description="Pozwól innym zapraszać Cię do grup wsparcia." enabled={allowInvites} setEnabled={setAllowInvites} />
                         </div>
                    </div>
                )}
                 {activeTab === 'Powiadomienia' && (
                    <div>
                        <div className="p-6 border-b border-border-color">
                             <h2 className="text-xl font-bold text-text-primary">Powiadomienia</h2>
                             <p className="text-sm text-text-secondary mt-1">Wybierz, jak chcesz otrzymywać powiadomienia.</p>
                        </div>
                         <div className="p-6 space-y-6">
                            <ToggleSwitch label="Powiadomienia push w aplikacji" description="Otrzymuj alerty bezpośrednio na swoim urządzeniu." enabled={pushNotifications} setEnabled={setPushNotifications} />
                            <ToggleSwitch label="Powiadomienia e-mail" description="Otrzymuj podsumowania i ważne alerty na swój adres e-mail." enabled={emailNotifications} setEnabled={setEmailNotifications} />
                            <ToggleSwitch label="Nowe wiadomości w grupach" description="Otrzymuj powiadomienia o nowych wiadomościach w grupach, do których należysz." enabled={groupMessages} setEnabled={setGroupMessages} />
                         </div>
                    </div>
                )}
                 {activeTab === 'Wygląd' && (
                     <div>
                        <div className="p-6 border-b border-border-color">
                             <h2 className="text-xl font-bold text-text-primary">Wygląd</h2>
                             <p className="text-sm text-text-secondary mt-1">Dostosuj wygląd aplikacji do swoich preferencji.</p>
                        </div>
                         <div className="p-6 space-y-6">
                            <div>
                                <h3 className="font-semibold text-text-primary mb-4">Wybierz motyw</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {Object.keys(themeNames).map((themeKey) => (
                                        <motion.button
                                            key={themeKey}
                                            onClick={() => setTheme(themeKey)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`relative p-4 rounded-lg border-2 text-left transition-colors ${theme === themeKey ? 'border-primary' : 'border-border-color'}`}
                                        >
                                            <div className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all ${theme === themeKey ? 'bg-primary scale-100' : 'scale-0'}`}>
                                                <span className="material-symbols-outlined text-white text-sm">check</span>
                                            </div>
                                            <p className="font-semibold text-text-primary">{themeNames[themeKey]}</p>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>
                )}
                {activeTab === 'Zarządzanie Danymi' && (
                     <div>
                        <div className="p-6 border-b border-border-color">
                             <h2 className="text-xl font-bold text-text-primary">Zarządzanie Danymi</h2>
                             <p className="text-sm text-text-secondary mt-1">Zarządzaj swoimi danymi osobowymi.</p>
                        </div>
                         <div className="p-6 space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-text-primary">Eksportuj swoje dane</h3>
                                    <p className="text-xs text-text-secondary mt-1">Pobierz kopię wszystkich swoich danych w formacie JSON.</p>
                                </div>
                                <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="flex items-center justify-center px-4 h-9 text-sm font-medium rounded-md border border-border-color text-text-primary hover:bg-background">Pobierz dane</motion.button>
                            </div>
                            <div className="p-4 rounded-lg border-2 border-red-500/50 bg-red-500/10 space-y-4">
                                <h3 className="font-bold text-red-600 dark:text-red-400">Strefa niebezpieczna</h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-text-primary">Usuń konto</h4>
                                        <p className="text-xs text-text-secondary mt-1">Ta operacja jest nieodwracalna. Wszystkie Twoje dane zostaną trwale usunięte.</p>
                                    </div>
                                    <motion.button whileHover={{scale: 1.05, backgroundColor: '#ef4444', color: '#ffffff' }} whileTap={{scale: 0.95}} className="flex items-center justify-center px-4 h-9 text-sm font-medium rounded-md border border-red-500/50 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white">Usuń konto</motion.button>
                                </div>
                            </div>
                         </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );

    return (
        <AnimatedPage>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                    <div>
                        <h1 className="text-text-primary text-3xl font-bold leading-tight tracking-tight">Ustawienia</h1>
                        <p className="text-text-secondary mt-1">Zarządzaj swoim kontem, prywatnością i preferencjami.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.aside 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1"
                    >
                        <nav className="flex flex-col space-y-2 sticky top-8">
                           {tabs.map((tab, index) => (
                               <button key={tab} onClick={() => setActiveTab(tab)} className={`relative flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === tab ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-card'}`}>
                                   <span className="material-symbols-outlined">{tabIcons[index]}</span>
                                   <span>{tab}</span>
                                   {activeTab === tab && <motion.div className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-full" layoutId="active-settings-tab" />}
                               </button>
                           ))}
                        </nav>
                    </motion.aside>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3"
                    >
                        <motion.div layout transition={{ duration: 0.3 }} className="bg-card rounded-xl border border-border-color">
                            {renderTabContent()}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Ustawienia;