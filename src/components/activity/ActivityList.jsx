import { useState, useEffect } from 'react';
import { filterActivityData, sortActivityData } from '@/utils/dataUtils';
import axios from 'axios';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortKey, setSortKey] = useState('participants');
    const [sortDirection, setSortDirection] = useState('ascending');

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get('https://www.boredapi.com/api/activity/');
                setActivities([response.data]);
            } catch (error) {
                console.error('Error fetching activities', error);
            }
        };

        fetchActivities();
    }, []);

    useEffect(() => {
        let data = filterActivityData(activities, filter);
        data = sortActivityData(data, sortKey, sortDirection);
        setFilteredActivities(data);
    }, [activities, filter, sortKey, sortDirection]);

    return (
        <div>
            <input 
                type="text"
                placeholder="Filtrar por tipo de actividad"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-4"
            />

            <div className="flex mb-4 space-x-4">
                <button onClick={() => setSortKey('participants')}>Ordenar por participantes</button>
                <button onClick={() => setSortKey('type')}>Ordenar por tipo</button>
                <button onClick={() => setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending')}>
                    Cambiar dirección ({sortDirection})
                </button>
            </div>

            <ul>
                {filteredActivities.map((activity, index) => (
                    <li key={index} className="mb-2">
                        <div><strong>Actividad:</strong> {activity.activity}</div>
                        <div><strong>Tipo:</strong> {activity.type}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList
