import { useState, useEffect } from 'react';
import axios from 'axios';

const useActivityApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setError(null);
            } catch {
                setError("No s'ha pogut obtenir l'activitat. Torna-ho a intentar.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useActivityApi
