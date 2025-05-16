const FormInput = ({ name, value, onChange, placeholder, type = 'text' }) => (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
  
  export default FormInput;
  