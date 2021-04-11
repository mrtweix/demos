import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
const animatedComponents = makeAnimated();

const ReactSelect = ({
  data,
  label = null,
  isMulti = false,
  disabled = false,
  isSearchable = false,
  placeholder = "Select..",
  isLoading = true,
  defaultValue,
  maxLimit = 5,
  handleChange = () => {},
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const handleTypeSelect = (e) => {
    handleChange(e);
    return setSelectedOption(e);
  };

  return (
    <CreatableSelect
      {...props}
      isMulti={isMulti}
      label={label || "tags"}
      maxMenuHeight={150}
      isDisabled={disabled}
      placeholder={placeholder}
      isSearchable={isSearchable}
      onChange={handleTypeSelect}
      getOptionLabel={(x) => x.label}
      getOptionValue={(x) => x.value}
      components={animatedComponents}
      defaultValue={defaultValue}
      closeMenuOnSelect={true}
      options={selectedOption.length === maxLimit ? [] : data}
      noOptionsMessage={() => {
        return selectedOption.length === maxLimit
          ? "You have reached the max options value"
          : "No options available";
      }}
    />
  );
};

export default ReactSelect;
