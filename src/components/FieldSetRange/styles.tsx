import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: none;
  div {
    color: ${colors.error};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
    color: ${colors.secondary};
    font-size: 18px;
    font-weight: 700;
  }

  input {
    cursor: pointer;
  }
`;
