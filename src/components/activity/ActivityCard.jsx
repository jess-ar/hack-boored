/* eslint-disable react/prop-types */
const ActivityCard = ({ activity }) => {
    return (
        <div className="max-w-md p-6 mx-auto my-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{activity}</h2>
        </div>
    );
};

export default ActivityCard
