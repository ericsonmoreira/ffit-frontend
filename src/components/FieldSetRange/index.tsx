import { ErrorMessage, Field, useFormikContext } from 'formik';
import React from 'react';

import { Container } from './styles';

interface FieldSetRangeProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  format?: Function;
}

const FieldSetRange: React.FC<FieldSetRangeProps> = ({
  name,
  label,
  min = 0,
  max = 100,
  step = 0.01,
  format,
  ...rest
}) => {
  const { values } = useFormikContext<any>();
  return (
    <Container {...rest}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
      />
      <section>{format ? format(values[name]) : values[name]}</section>
      <ErrorMessage name={name} component="div" />
    </Container>
  );
};

export default FieldSetRange;
