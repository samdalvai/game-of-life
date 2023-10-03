const CheckBoxInput = ({ checked, name, label, onChange }: { checked: boolean, name: string, label: string, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return <div className="w-full flex flex-col justify-center items-center">
        <label className="block text-blue-600">{label}</label>
        <input
            type="checkbox"
            name={name}
            className="h-5 w-5 mt-3 text-blue-600 focus:ring-2 focus:ring-blue-300"
            checked={checked}
            onChange={onChange}
        />
    </div>;
};

export default CheckBoxInput;