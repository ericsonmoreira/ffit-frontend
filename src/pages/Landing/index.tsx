import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
  Container,
  Content,
  Logo,
  TitleWrapper,
  Title,
  SubTitle,
  Location,
  GoAppButton,
} from './styles';

import colors from '../../styles/colors';

import boloImg from '../../images/bolo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={boloImg} />

        <TitleWrapper>
          <Title>Catalottone</Title>
          <SubTitle>O seu catálogo de panetones agora na internet</SubTitle>
          <SubTitle>
            Uma lista de panetones de algumas marcas (Bauducco, Nestlé, etc) com
            fotos (dos panetones) e com filtro (pelo menos filtrar por marca)
          </SubTitle>
        </TitleWrapper>
        <Location>
          <strong>Tabuleiro do Norte</strong>
          <section>Ceará</section>
        </Location>
        <GoAppButton to="/app">
          <FiArrowRight size={24} color={colors.secondary} />
        </GoAppButton>
      </Content>
    </Container>
  );
};

export default Landing;
