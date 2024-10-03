/* eslint-disable react/prop-types */
import Button from '@/components/buttons/Button';

const filters = ['Social', 'Educació', 'Caritat', 'Cuinar', 'Relaxació', 'Treball intens'];

const ActivityGenerator = ({ selectedFilter, onFilterChange }) => {
    return (
        <div className="flex flex-wrap justify-center mb-4 space-x-2">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    text={filter}
                    isActive={selectedFilter === filter}
                    onClick={() => onFilterChange(filter)}
                />
            ))}
        </div>
    );
};

export default ActivityGenerator