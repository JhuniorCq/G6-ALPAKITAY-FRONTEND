import PropTypes from "prop-types";
import "./FormInput.css";

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  name,
  register,
  errors,
}) => {
  return (
    <div className="form-input">
      {label && (
        <label htmlFor={id} className="form-input__label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={
          errors[name]
            ? "form-input__input form-input__input-error"
            : "form-input__input"
        }
      />
      {errors[name] && (
        <p className="form-input__error-message error-color">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

// El id debe ser de tipo number
FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
