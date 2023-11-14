const NumberInput = ({ value, name, label, onChange }: { value: number, name: string, label: string, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return <div className="w-full">
        <label className="block text-blue-600">{label}</label>
        <input
            type="number"
            name={name}
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            value={value}
            onChange={onChange}
        />
    </div>;
};

export default NumberInput;