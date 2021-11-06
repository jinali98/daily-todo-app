const CustomInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <label className="">{label}</label>
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default CustomInput;
