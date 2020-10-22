import { ErrorMessage, Field } from 'formik';
import React from 'react';

import { Container } from './styles';

interface FieldSetTextProps {
  name: string;
  label: string;
}

const FieldSetText: React.FC<FieldSetTextProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <section>
        <label htmlFor={name}>{label}</label>
        <Field id={name} type="text" name={name} />
      </section>
      <ErrorMessage name={name} component="div" />
    </Container>
  );
};

export default FieldSetText;
