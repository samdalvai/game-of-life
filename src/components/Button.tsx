import { CallBack } from '../types/callbacks';
import { ButtonColor } from '../types/components';

const Button = ({ text, color, onClick }: { text: string, color: ButtonColor, onClick: CallBack }) => {
    const buttonColors = {
        blue: 'bg-blue-500 hover:bg-blue-600',
        gray: 'bg-gray-500 hover:bg-gray-600',
        green: 'bg-green-700 hover:bg-green-800',
        red: 'bg-red-500 hover:bg-red-600'
    };

    return <button className={`px-4 py-2 w-full font-bold text-white rounded ${buttonColors[color]}`} onClick={onClick}>
        <span className="flex justify-center items-center">
            {text}
        </span>
    </button>;
};

export default Button;