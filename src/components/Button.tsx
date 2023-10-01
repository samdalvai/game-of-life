import { ReactNode } from 'react';
import { CallBack } from '../types/callbacks';
import { ButtonColor } from '../types/components';

const Button = ({ text, icon, color, onClick }: { text: string, icon?: ReactNode, color: ButtonColor, onClick: CallBack }) => {
    const buttonColors = {
        blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-800',
        gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-800',
        green: 'bg-green-700 hover:bg-green-800 focus:ring-green-1000',
        red: 'bg-red-500 hover:bg-red-600 focus:ring-red-800'
    };

    return <button className={`focus:ring-1 px-4 py-2 w-full text-sm font-bold text-white rounded ${buttonColors[color]}`} onClick={onClick}>
        <span className="flex justify-center items-center">
            <span className="pe-1">{icon}</span>
            {text}
        </span>
    </button>;
};

export default Button;