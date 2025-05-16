const FormSelect = ({ name, value, onChange, placeholder, options = [] }) => (
    <select name={name} value={value} onChange={onChange} className="input">
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
      ))}
    </select>
  );
  
  export default FormSelect;
  