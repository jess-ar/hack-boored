import { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityGenerator from '@/components/activity/ActivityGenerator';
import BlackButton from '@/components/buttons/BlackButton';

const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [activity, setActivity] = useState('');
    const [error, setError] = useState(null);
    const [mascota, setMascota] = useState('/mascota-negre.svg');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const updateMascota = () => {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            setMascota(currentTheme === 'dark' ? '/mascota-blanc.svg' : '/mascota-negre.svg');
        };

        const observer = new MutationObserver(updateMascota);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        updateMascota();

        return () => observer.disconnect();
    }, []);

    const handleGenerateClick = async () => {
        setLoading(true);
        try {
            let url = 'https://bored-api.appbrewery.com/random';

            if (selectedFilter) {
                const filterParam = selectedFilter.toLowerCase();
                url = `https://bored-api.appbrewery.com/filter?type=${filterParam}`;
            }

            const response = await axios.get(url);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;

            setActivity(data.activity);
            setError(null);
        } catch (err) {
            console.error("Error fetching activity:", err);
            setError("No s'ha pogut obtenir l'activitat. Torna-ho a intentar.");
            setActivity('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="items-center justify-center min-h-screen bg-background dark:bg-background lg:ml-60">
            <div className="flex flex-col items-center justify-between w-full mt-12 lg:flex-row lg:w-3/4 lg:mt-16">
                <div className="flex flex-col items-center text-center lg:w-1/2 lg:space-y-8">
                    <ActivityGenerator selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

                    <img src={mascota} alt="mascota" className="w-24 h-24 mb-4 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:mb-8" />
                    
                    <h2 className="font-bold">
                        TROBA ALGUNA <br /> COSA A FER
                    </h2>

                    <BlackButton
                        text={loading ? "Carregant..." : "Generar"}
                        onClick={handleGenerateClick}
                        disabled={loading}
                    />
                </div>

                <div className="hidden h-full border-l-2 border-gray-300 lg:block"></div>

                <div className="flex flex-col items-center text-center lg:items-start lg:w-1/2 lg:text-left">
                    <h3 className="mt-20 text-xl font-semibold sm:text-2xl lg:text-3xl lg:m-32">Activitat:</h3>
                    {error && <p className="mt-4 text-red-500">{error}</p>}
                    {activity && !error && <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg lg:text-xl">{activity}</p>}
                    {!activity && !error && !loading && <p className="mt-4 text-gray-500 sm:text-lg lg:text-md">Genera una activitat per començar</p>}
                </div>
            </div>
        </div>
    );
};

export default HomePage
