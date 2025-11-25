import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const Dziennik = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
        <div>
            <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Dziennik Małych Osiągnięć</h1>
            <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Zanotuj swoje codzienne sukcesy, bez względu na to, jak małe.</p>
        </div>
        <HeaderActions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
            <div className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-calm-text-light dark:text-calm-text-dark text-xl font-bold">Kwiecień 2024</h2>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-calm-text-secondary-light dark:text-calm-text-secondary-dark"><span className="material-symbols-outlined">chevron_left</span></button>
                        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 text-calm-text-secondary-light dark:text-calm-text-secondary-dark"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 text-center gap-y-2">
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Pon</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Wt</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Śr</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Czw</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Pt</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Sob</div>
                    <div className="py-2 text-sm font-medium text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Ndz</div>
                    {[...Array(30).keys()].map(i => {
                        const day = i + 1;
                        let specialClass = "text-calm-text-light dark:text-calm-text-dark";
                        let hasDot = [3, 5, 9, 14].includes(day);
                        if (day === 10) {
                            specialClass = "bg-calm-teal text-white font-bold ring-2 ring-offset-2 ring-calm-teal dark:ring-offset-calm-card-dark";
                            hasDot = true;
                        }
                        return (
                            <div key={day} className="h-12 flex justify-center items-center">
                                <button className={`relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 ${specialClass}`}>
                                    {day}
                                    {hasDot && <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 block h-1.5 w-1.5 rounded-full ${day === 10 ? 'bg-white dark:bg-calm-text-dark' : 'bg-calm-lavender'}`}></span>}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-1">
            <div className="p-6 bg-calm-card-light dark:bg-calm-card-dark rounded-xl border border-gray-200 dark:border-gray-700/50 sticky top-8">
                <div className="text-center mb-6">
                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark text-sm">Osiągnięcia z dnia</p>
                    <h3 className="text-calm-text-light dark:text-calm-text-dark text-2xl font-bold leading-tight">10 kwietnia 2024</h3>
                </div>
                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <span className="material-symbols-outlined text-calm-teal mt-1">check_circle</span>
                        <div>
                            <p className="font-medium text-calm-text-light dark:text-calm-text-dark">Ukończyłem/am 5-minutową medytację</p>
                            <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Mindfulness • Relaks</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <span className="material-symbols-outlined text-calm-teal mt-1">check_circle</span>
                        <div>
                            <p className="font-medium text-calm-text-light dark:text-calm-text-dark">Poszedłem/am na 20-minutowy spacer</p>
                            <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Aktywność fizyczna</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <span className="material-symbols-outlined text-calm-teal mt-1">check_circle</span>
                        <div>
                            <p className="font-medium text-calm-text-light dark:text-calm-text-dark">Spędziłem/am czas na swoim hobby</p>
                            <p className="text-xs text-calm-text-secondary-light dark:text-calm-text-secondary-dark">Dbanie o siebie</p>
                        </div>
                    </div>
                </div>
                <div className="bg-calm-teal/10 dark:bg-calm-teal/20 p-4 rounded-xl text-center">
                    <label className="text-sm font-medium text-calm-text-light dark:text-white" htmlFor="new-achievement">Co udało Ci się dzisiaj osiągnąć?</label>
                    <textarea className="w-full mt-2 bg-calm-card-light dark:bg-calm-dark-bg border-gray-300 dark:border-gray-700 rounded-lg text-calm-text-light dark:text-calm-text-dark placeholder:text-calm-text-secondary-light dark:placeholder:text-calm-text-secondary-dark focus:ring-calm-teal focus:border-calm-teal text-sm" id="new-achievement" placeholder="np. Poświęciłem/am 15 minut na czytanie" rows="3"></textarea>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full flex items-center justify-center gap-2 mt-3 h-11 px-4 bg-calm-teal text-white text-sm font-bold rounded-lg hover:bg-calm-teal/90 shadow-lg shadow-calm-teal/30">
                        <span className="material-symbols-outlined text-base">add_circle</span>
                        <span>Dodaj do dziennika</span>
                    </motion.button>
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
    </AnimatedPage>
  );
};

export default Dziennik;