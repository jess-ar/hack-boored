import { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityGenerator from '@/components/activity/ActivityGenerator';
import BlackButton from '@/components/buttons/BlackButton'; 

const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [activity, setActivity] = useState('');
    const [error, setError] = useState(null);
    const [mascota, setMascota] = useState('/mascota-negre.svg'); // Imagen inicial para el modo claro

    // Lógica para cambiar la mascota según el tema (dark/light)
    useEffect(() => {
        const updateMascota = () => {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            setMascota(currentTheme === 'dark' ? '/mascota-blanc.svg' : '/mascota-negre.svg');
        };

        // Detectar cambios en el tema
        const observer = new MutationObserver(updateMascota);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Actualizamos la imagen al cargar la página
        updateMascota();

        // Limpiamos el observer cuando el componente se desmonta
        return () => observer.disconnect();
    }, []);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const handleGenerateClick = async () => {
        try {
            let url = 'https://bored-api.appbrewery.com/random';  // URL para actividad aleatoria

            if (selectedFilter) {
                const filterParam = selectedFilter.toLowerCase();
                url = `https://bored-api.appbrewery.com/filter?type=${filterParam}`;
            }

            const response = await axios.get(url);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;

            setActivity(data.activity);  // Actualizamos la actividad generada
            setError(null);  // Limpiamos el error si la solicitud fue exitosa
        } catch (err) {
            console.error("Error fetching activity:", err);
            setError("No s'ha pogut obtenir l'activitat. Torna-ho a intentar.");
            setActivity('');  // Limpiamos la actividad anterior si hay un error
        }
    };

    return (
        <div className="items-center justify-center min-h-screen bg-background dark:bg-background lg:ml-60 ">
            {/* Contenedor principal con flex-row en escritorio */}
            <div className="flex flex-col items-center justify-between w-full mt-12 lg:flex-row lg:w-3/4 lg:mt-16">
                {/* Filtros, mascota y botón de generar alineados verticalmente en móviles y horizontalmente en escritorio */}
                <div className="flex flex-col items-center text-center lg:w-1/2 lg:space-y-8">
                    <ActivityGenerator selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
                    
                    <img src={mascota} alt="mascota" className="w-24 h-24 mb-4 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:mb-8" />
                    
                    <h2 className="font-bold ">
                        TROBA ALGUNA <br /> COSA A FER
                    </h2>
                    
                    <BlackButton
                        text="Generar"
                        onClick={handleGenerateClick}
                    />
                </div>

                {/* Línea divisoria */}
                <div className="hidden h-full border-l-2 border-gray-300 lg:block"></div>

                {/* Actividad generada */}
                <div className="flex flex-col items-center text-center lg:items-start lg:w-1/2 lg:text-left">
                    <h3 className="mt-20 text-xl font-semibold sm:text-2xl lg:text-3xl lg:m-32">Activitat:</h3>
                    {error && <p className="mt-4 text-red-500">{error}</p>}
                    {activity && <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg lg:text-xl">{activity}</p>}
                </div>
            </div>
        </div>
    );
};

export default HomePage
