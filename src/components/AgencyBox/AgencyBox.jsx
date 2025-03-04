import { Controller } from "react-hook-form";
import Select from "react-select";
import PropTypes from "prop-types";
import "./AgencyBox.css";

const options = [
  {
    value: "Shalom - Lima",
    label: "Shalom - Lima",
  },
  {
    value: "Shalom - Arequipa",
    label: "Shalom - Arequipa",
  },
  {
    value: "Shalom - Trujillo",
    label: "Shalom - Trujillo",
  },
  {
    value: "Shalom - Chiclayo",
    label: "Shalom - Chiclayo",
  },
  {
    value: "Shalom - Cusco",
    label: "Shalom - Cusco",
  },
  {
    value: "Shalom - Piura",
    label: "Shalom - Piura",
  },
  {
    value: "Shalom - Huancayo",
    label: "Shalom - Huancayo",
  },
  {
    value: "Shalom - Tacna",
    label: "Shalom - Tacna",
  },
  {
    value: "Shalom - Iquitos",
    label: "Shalom - Iquitos",
  },
  {
    value: "Shalom - Puno",
    label: "Shalom - Puno",
  },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    padding: "7px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export const AgencyBox = ({ name, control, errors }) => {
  return (
    <div className="agency-box">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            styles={customStyles}
            options={options}
            placeholder="Selecciona una agencia"
          />
        )}
      />
      {errors.agency && (
        <p className="agency-box__error-message error-color">
          {errors.agency.message}
        </p>
      )}
    </div>
  );
};

AgencyBox.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
