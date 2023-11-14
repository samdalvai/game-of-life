const SliderInput = ({ value, name, label, onChange }: { value: number, name: string, label: string, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return <div className="w-full flex flex-col justify-center items-start">
        <label className="flex text-blue-600 pb-2">
            {label}{': '}
            <div className="text-blue-600 ps-2">{value}{' ms'}</div>
        </label>
        <div className="w-full flex justify-between">
            <input
                type="range"
                name={name}
                className="w-full"
                value={value}
                min={10}
                max={1000}
                onChange={onChange}
            />
        </div>
    </div>;
};

export default SliderInput;