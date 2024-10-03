/* eslint-disable react/prop-types */
const BlackButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 mt-5 text-white duration-200 bg-black rounded-xl tr-ansition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
            {text}
        </button>
    );
};

export default BlackButton