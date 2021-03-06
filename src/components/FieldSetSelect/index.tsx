import { ErrorMessage, Field } from 'formik';
import React from 'react';

import { Container } from './styles';

interface FieldSetSelectProps {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const FieldSetSelect: React.FC<FieldSetSelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <section>
        <label htmlFor={name}>{label}</label>
        <Field id={name} as="select" name={name}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </section>
      <ErrorMessage name={name} component="div" />
    </Container>
  );
};

export default FieldSetSelect;
