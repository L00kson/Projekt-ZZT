import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import HeaderActions from '../components/HeaderActions';

const Zasoby = () => {
  return (
    <AnimatedPage>
        <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(118,199,192,0.2),_transparent_70%)] rounded-full pointer-events-none z-0 opacity-60 filter blur-[50px]"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(177,162,202,0.15),_transparent_70%)] rounded-full pointer-events-none z-0 opacity-70 filter blur-[60px]"></div>
            
            <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
                <div>
                    <h1 className="text-calm-text-light dark:text-calm-text-dark text-3xl font-bold leading-tight tracking-tight">Zasoby</h1>
                    <p className="text-calm-text-secondary-light dark:text-calm-text-secondary-dark mt-1">Przeglądaj artykuły, ćwiczenia i zaufane linki, aby wesprzeć swoje samopoczucie.</p>
                </div>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-calm-text-secondary-light dark:text-calm-text-secondary-dark">search</span>
                    <input className="w-full sm:w-64 pl-10 pr-4 py-2 bg-calm-card-light dark:bg-calm-card-dark border border-gray-200 dark:border-gray-700/50 rounded-lg text-calm-text-light dark:text-calm-text-dark placeholder:text-calm-text-secondary-light dark:placeholder:text-calm-text-secondary-dark focus:ring-calm-teal focus:border-calm-teal" id="search-resources" placeholder="Szukaj zasobów..." type="text"/>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700/50">
                <button className="px-4 py-2 text-sm font-semibold border-b-2 border-calm-teal text-calm-teal">Wszystko</button>
                <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-text-light dark:hover:text-calm-text-dark">Wsparcie kryzysowe</button>
                <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-text-light dark:hover:text-calm-text-dark">Artykuły</button>
                <button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-calm-text-secondary-light dark:text-calm-text-secondary-dark hover:text-calm-text-light dark:hover:text-calm-text-dark">Ćwiczenia</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-calm-lavender">Wsparcie kryzysowe</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">Telefon zaufania dla dzieci i młodzieży</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Anonimowa i bezpłatna pomoc telefoniczna i online dostępna 24/7 dla osób w kryzysie emocjonalnym.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                        Odwiedź stronę
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-calm-teal">Artykuły</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">Zrozumieć lęk: przyczyny i strategie radzenia sobie</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Głębokie spojrzenie na mechanizmy lęku oraz praktyczne porady, jak go kontrolować w codziennym życiu.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                        Przeczytaj artykuł
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Ćwiczenia</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">Technika oddechowa 4-7-8 dla uspokojenia</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Proste, ale potężne ćwiczenie oddechowe, które pomaga zredukować stres i napięcie w kilka minut.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                        Rozpocznij ćwiczenie
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-calm-teal">Artykuły</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">Jak budować zdrowe nawyki snu</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Dowiedz się, jak poprawić jakość swojego snu dzięki prostym zmianom w codziennej rutynie.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                        Przeczytaj artykuł
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Ćwiczenia</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">Praktyka uważności: Skanowanie ciała</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Prowadzona medytacja, która pomaga zwiększyć świadomość ciała i uwolnić nagromadzone napięcie.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                        Rozpocznij ćwiczenie
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="relative flex flex-col bg-calm-card-light dark:bg-calm-card-dark rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 transition-shadow hover:shadow-lg dark:hover:shadow-calm-teal/10">
                    <div className="flex-grow">
                        <span className="text-xs font-bold uppercase tracking-wider text-calm-lavender">Wsparcie kryzysowe</span>
                        <h3 className="text-lg font-bold text-calm-text-light dark:text-calm-text-dark mt-2 mb-2">ITAKA - Centrum Poszukiwań Ludzi Zaginionych</h3>
                        <p className="text-sm text-calm-text-secondary-light dark:text-calm-text-secondary-dark mb-4">Oferuje wsparcie psychologiczne dla osób w kryzysie samobójczym i ich bliskich. Dostępny telefon zaufania.</p>
                    </div>
                    <a className="flex items-center gap-2 text-sm font-bold text-calm-teal group mt-auto" href="#">
                       Odwiedź stronę
                       <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
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

export default Zasoby;