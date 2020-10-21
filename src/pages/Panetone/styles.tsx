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
`;

export const Title = styled.div`
  text-align: left;
`;

export const Details = styled.div`
  background: ${colors.terciary};
  border-radius: 20px;
  width: 500px;
  border: 1px solid ${colors.primary};

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    background: ${colors.secondary}
  }

  ul {
    list-style: none;
  }
`;

export const Info = styled.div`
  padding: 20px;
`;
