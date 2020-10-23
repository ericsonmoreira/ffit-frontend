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

  select {
    padding: 10px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: ${colors.primary};
    font-weight: 600;
  }
`;
