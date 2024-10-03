import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchActivity = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error('No data returned from API');
        }
    } catch (error) {
        console.error('Error fetching activity:', error);
        throw error;
    }
};