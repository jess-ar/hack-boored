import { useState, useEffect } from 'react';
import axios from 'axios';

const useActivityApi = (filter = null) => {
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActivity = async () => {
            setLoading(true);
            setError(null);

            try {
                const url = filter ? `https://bored-api.appbrewery.com/filter?type=${filter}` : 'https://bored-api.appbrewery.com/random';
                const response = await axios.get(url);

                const data = Array.isArray(response.data) ? response.data[0] : response.data;
                setActivity(data.activity || "No se encontró ninguna actividad");
            } catch {
                setError("No s'ha pogut obtenir l'activitat. Torna-ho a intentar.");
            } finally {
                setLoading(false);
            }
        };

        fetchActivity();
    }, [filter]);

    return { activity, loading, error };
};

export default useActivityApi