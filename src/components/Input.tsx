const Input = () => {
    return <div className="flex justify-center items-center min-h-screen">
        <div className="w-64">
            <label className="block text-gray-600">Input Label</label>
            <input id="input" type="text" className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"/>
        </div>
    </div>;
};

export default Input;