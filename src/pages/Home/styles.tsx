import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PanetonesList = styled.div`
  width: 700px;
  margin: 64px auto;
  background: ${colors.yellow};
  padding: 64px 80px;
  border-radius: 20px;
  border: 1px solid ${colors.terciary};
`;

export const PanetoneItem = styled.div`
  
`;
