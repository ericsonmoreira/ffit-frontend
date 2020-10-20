import React from 'react';
import SideBar from '../../components/SideBar';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <h1>Catalottone</h1>
      </Content>
    </Container>
  );
};

export default Home;
