import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import CustomSearchDropdown from './CustomSearchDropdown/CustomSearchDropdown';

const flattenSelectOptions = (options = []) => options.reduce((acc, option) => {
  if (option?.group) {
    return acc.concat(option.group);
  }
  return acc.concat(option);
}, []);

/**
 * Plugin-slot control that replaces native EditableSelectField dropdowns
 * with the custom searchable dropdown copied from frontend-app-profile.
 */
const CustomEditableSelectControl = ({
  id,
  name,
  value,
  options,
  emptyLabel,
  error,
  onChange,
}) => {
  const stringValue = value == null ? '' : String(value);
  const placeholder = typeof emptyLabel === 'string' ? emptyLabel : '';
  const flatOptions = useMemo(() => flattenSelectOptions(options), [options]);

  const handleChange = (nextValue) => {
    onChange(name, nextValue);
  };

  return (
    <>
      {/* Keep native form submit working via FormData.get(name). */}
      <input type="hidden" name={name} value={stringValue} />
      <CustomSearchDropdown
        id={id}
        options={flatOptions}
        value={stringValue}
        placeholder={placeholder}
        isInvalid={error != null}
        onChange={handleChange}
      />
    </>
  );
};

CustomEditableSelectControl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
    }),
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      group: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
      })),
    }),
  ])),
  emptyLabel: PropTypes.node,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CustomEditableSelectControl.defaultProps = {
  value: '',
  options: [],
  emptyLabel: '',
  error: undefined,
};

export default CustomEditableSelectControl;
