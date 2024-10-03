import { useState } from 'react';

const useFilter = (initialFilter = null) => {
    const [selectedFilter, setSelectedFilter] = useState(initialFilter);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return { selectedFilter, handleFilterClick };
};

export default useFilter
