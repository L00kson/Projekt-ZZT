import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Sidebar = () => {
    const { theme } = useContext(ThemeContext);
    const isNebula = theme === 'theme-nebula';

    const navItems = [
        { to: "/", icon: "grid_view", text: "Pulpit" },
        { to: "/dziennik", icon: "edit_note", text: "Dziennik" },
        { to: "/grupy", icon: "diversity_3", text: "Strefa grupowa" },
        { to: "/medytacje", icon: "self_improvement", text: "Medytacje" },
        { to: "/zasoby", icon: "folder_open", text: "Zasoby" },
        { to: "/profil", icon: "person", text: "Twoja strefa" },
        { to: "/ustawienia", icon: "settings", text: "Ustawienia" },
        { to: "/pomoc", icon: "smartphone", text: "Pomoc" },
    ];

    const sidebarContainerClass = isNebula
        ? "bg-[#1E293B]/40 border border-white/5 backdrop-blur-md"
        : "glass-panel";

    const activeLinkClass = isNebula
        ? "nebula-active-gradient text-white shadow-lg"
        : "text-white bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20";

    const inactiveLinkClass = isNebula
        ? "text-gray-400 hover:bg-white/5 hover:text-white"
        : "text-text-secondary hover:bg-primary/10 hover:text-primary";

    return (
        <aside className="hidden md:flex h-full w-20 lg:w-64 flex-col p-4 sticky top-0 z-20">
            <div className={`h-full rounded-2xl flex flex-col p-4 transition-all duration-300 ${sidebarContainerClass}`}>
                {/* Logo Area */}
                <div className="flex items-center gap-3 px-2 mb-10 mt-2">
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <img 
                            src="/logo512.png"
                            alt="Logo"
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="hidden lg:block text-left leading-tight">
                        <h1 className={`text-lg font-bold tracking-tight ${isNebula ? 'text-white' : 'text-text-primary'}`}>
                            Barometr
                        </h1>
                        <h2 className={`text-base font-medium ${isNebula ? 'text-gray-400' : 'text-text-secondary'}`}>
                            Nastrojów
                        </h2>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-grow">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.to} 
                            to={item.to} 
                            className={({ isActive }) => 
                                `relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group overflow-hidden
                                ${isActive ? activeLinkClass : inactiveLinkClass}`
                            }
                        >
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            <p className="hidden lg:block text-sm font-medium tracking-wide">{item.text}</p>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;