import { Form } from 'formik';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormPanetone = styled(Form)`
  margin-bottom: 60px;
  padding: 40px;
  border-radius: 20px; 
  background: ${colors.terciary}
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  border: none;
  color: ${colors.primary};
  background: ${colors.yellow};
  transition: background-color 0.2s;

  :hover {
    background: ${colors.blue};
  }
`;
