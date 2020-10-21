import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.aside`
  position: fixed;
  background: ${colors.quaternary};
  height: 100%;
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const buttonCss = css`
  width: 48px;
  height: 48px;
  display: flex;
  border: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  background: ${colors.yellow};
  transition: background-color 0.2s;

  :hover {
    background: ${colors.blue};
  }
`;

export const GoAddButton = styled(Link)`
  ${buttonCss}
  margin-bottom: 20px;
`;

export const GoBackButton = styled.button`
  ${buttonCss}
`;

