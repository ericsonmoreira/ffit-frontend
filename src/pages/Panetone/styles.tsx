import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.div`
  background: ${colors.terciary};
  padding: 30px;
  border-radius: 20px;
  border: 1px solid ${colors.primary};

  img {
    width: 300px;
    object-fit: cover;
    border-radius: 20px;
  }
`;
