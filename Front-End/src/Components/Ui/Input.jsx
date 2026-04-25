function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-200 rounded-lg 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      outline-none transition"
    />
  );
}

export default Input;