const ButtonPrimary = ({ text = "Button" }) => {
    return (
        <div>
            <button class="px-6 py-2 font-inter text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 shadow-blue-400/20">{text}</button>
        </div>
    );
}

export default ButtonPrimary;