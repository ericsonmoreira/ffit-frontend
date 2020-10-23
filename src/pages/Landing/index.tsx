import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
  Container,
  Content,
  Logo,
  TitleWrapper,
  Title,
  SubTitle,
  DevelopInfoWrapper,
  GoAppButton,
} from './styles';

import colors from '../../styles/colors';

import boloImg from '../../images/bolo.svg';
import DeveloperInfo from '../../components/DeveloperInfo';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={boloImg} />

        <TitleWrapper>
          <Title>Catalottone</Title>
          <SubTitle>O seu catálogo de panetones agora na internet</SubTitle>
          <SubTitle>
            O panetone é um alimento tradicional da época de Natal, de origem
            milanesa, região a noroeste da Itália. Várias lendas tentam explicar
            a sua origem. O pão doce ou bolo de natal possui fragrância discreta
            de baunilha e recheio de frutas secas, tais como damasco, laranja,
            limão, maçã, cidra e a uva passa.
          </SubTitle>
        </TitleWrapper>
        <DevelopInfoWrapper>
          <DeveloperInfo />
        </DevelopInfoWrapper>
        <GoAppButton to="/app">
          <FiArrowRight size={36} color={colors.secondary} />
        </GoAppButton>
      </Content>
    </Container>
  );
};

export default Landing;
