import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: none;

  section {
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
      color: ${colors.secondary};
      font-size: 18px;
      font-weight: 700;
    }
    input {
      flex: 1;
      height: 50px;
      border-radius: 25px;
      padding: 0 20px;
      outline: none;
      color: ${colors.secondary};
      font-weight: 700;
      border: none;
    }
  }

  div {
    margin-top: 10px;
    color: ${colors.error};
    font-size: 16px;
  }
`;
