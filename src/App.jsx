import { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

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

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-xs p-6 bg-white shadow-lg dark:bg-gray-700 sm:p-8 sm:max-w-md rounded-2xl">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-900 dark:text-white">
          Benvingut/da
        </h1>
        <p className="mb-4 text-sm text-center text-gray-700 dark:text-gray-300">
          Inici del projecte amb React i TailwindCSS.
        </p>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <button
            className="px-4 py-2 text-xs text-gray-900 transition-colors bg-gray-300 border-gray-300 rounded-lg sm:text-sm hover:bg-gray-400 dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gray-600"
            onClick={handleThemeChange}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
