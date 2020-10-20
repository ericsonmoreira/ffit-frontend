import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
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

  div + div {
    margin-top: 20px;
  }
`;

export const PanetoneItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.quaternary};
  padding: 32px;
  border-radius: 20px;
`;

export const PanetoneLabel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  strong {
    font-size: 24px;
    font-weight: 800;
  }
  section {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.terciary};
  }
`;

export const GoToDetailsButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: transparent;
  transition: background-color 0.2s;

  :hover {
    background: ${colors.secondary};
  }
`;
