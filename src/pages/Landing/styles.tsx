import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  padding: 80px;
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 500px;
`;

export const Logo = styled.img`
  position: absolute;
  height: 75px;
  width: 75px;
  top: 0;
  left: 0;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 68px;
  font-weight: 800;
  line-height: 72px;
  letter-spacing: 4px;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  width: 600px;
  font-weight: 600;
  line-height: 20px;
  margin: 10px 0px;
`;

export const DevelopInfoWrapper = styled.div`
  position: absolute;
  top:0;
  right:0;
`;

export const GoAppButton = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 16px;
  background: ${colors.yellow};
  transition: background-color 0.2s;

  :hover {
    background: ${colors.blue};
  }
`;
