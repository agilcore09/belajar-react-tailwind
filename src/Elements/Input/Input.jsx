const Input = (props) => {
    const { type, placeholder, label } = props;
    return (
        <div className="mb-6">
            <label htmlFor="" className='block text-slate-700 font-bold my-2'>{label}</label>
            <input type={type} className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50' placeholder={placeholder} />
        </div>
    )
}

export default Input;