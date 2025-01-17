import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
import { SunIcon, MoonIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-white dark:bg-dark-bg-primary border-b border-gray-200 dark:border-gray-700">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Taller Tecnicentro
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                        >
                            {theme === 'light' ? (
                                <MoonIcon className="h-5 w-5" />
                            ) : (
                                <SunIcon className="h-5 w-5" />
                            )}
                        </button>

                        <div className="relative ml-3">
                            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user?.username}
                </span>
                                <UserCircleIcon className="h-8 w-8 text-gray-400" />
                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;