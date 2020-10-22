import { ErrorMessage, Field } from 'formik';
import React from 'react';

import { Container } from './styles';

interface FieldSetText {
  name: string;
  label: string;
}

const FieldSetText: React.FC<FieldSetText> = ({ name, label, ...rest }) => {
  return (
    <Container {...rest}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} type="text" name={name} />
      <ErrorMessage name={name} component="div" />
    </Container>
  );
};

export default FieldSetText;
