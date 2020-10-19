import React from 'react';
import { FiArrowRight } from 'react-icons/fi';


import { Container, Content, Title, SubTitle, GoAppButton } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Catalottone</Title>
        <SubTitle>O seu catálogo de panetones</SubTitle>
        <GoAppButton>
          <FiArrowRight />
        </GoAppButton>
      </Content>
    </Container>
  );
};

export default Landing;
