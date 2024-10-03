/* eslint-disable react/prop-types */
const Button = ({ onClick, text, isActive }) => {
    return (
        <button
            className={`px-6 py-2 m-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                isActive ? 'bg-purple-500 text-white' : ' text-black  dark:text-gray-300'
            } border-gray-300 hover:bg-purple-500 hover:text-white`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button
