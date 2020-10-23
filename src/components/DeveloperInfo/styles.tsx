import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  color: ${colors.terciary};
  width: 550px;
  background: ${colors.primary};

  div {
    display: flex;
    flex-direction: column;
    text-align: right;

    section {
      display: flex;
      align-items: center;
      justify-content: right;

      a {
        text-decoration: none;
        cursor: pointer;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Name = styled.strong`
  font-size: 32px;
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
