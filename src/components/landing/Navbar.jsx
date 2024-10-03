import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const navlinks = [
        { name: "Inici", to: "/" },
        { name: "Sobre l'equip", to: "/about" },
        { name: "Iniciar sessió", to: "/login" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="px-5 pt-5" style={{ boxShadow: "var(--shadow-custom)" }}>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <button onClick={handleLogoClick} className="h-10">
                        <img src="/logo.svg" alt="logo" className="w-[100px] text-primary" style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(83%) saturate(434%) hue-rotate(70deg) brightness(98%) contrast(92%)' }} />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden space-x-8 lg:flex">
                    {navlinks.map((item) => (
                        <NavLink key={item.name} to={item.to} className="hover:text-primary">
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Theme Toggle Button */}
                <div className="flex items-center space-x-4">
                    <button
                        className="px-4 py-2 text-xs text-white transition-colors bg-green-600 rounded-lg sm:text-sm hover:bg-green-500"
                        onClick={handleThemeChange}
                    >
                        {theme === 'light' ? 'Mode Fosc' : 'Mode clar'}
                    </button>
                    <div className="lg:hidden" ref={menuRef}>
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none hover:text-primary"
                        >
                            <Menu size={40} />
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="flex flex-col py-5 space-y-2 lg:hidden items-left" ref={menuRef}>
                    {navlinks.map((item) => (
                        <NavLink key={item.name} to={item.to} className="hover:text-primary">
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar
