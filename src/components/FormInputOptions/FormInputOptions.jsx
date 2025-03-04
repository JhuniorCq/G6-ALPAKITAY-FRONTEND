import PropTypes from "prop-types";
import "./FormInputOptions.css";

export const FormInputOptions = ({ options, name, register, errors }) => {
  if (options.length === 0) return <p>No hay opciones disponibles</p>;

  return (
    <ul className="form-input-options">
      {options.map((option, i) => (
        <li key={option.id} className="form-input-options__option">
          <label className="form-input-options__label">
            <input
              type="radio"
              name={name}
              value={option.name}
              {...register(name)}
            />
            <p className="form-input-options__text">{option.name}</p>
          </label>
        </li>
      ))}
    </ul>
  );
};

FormInputOptions.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
