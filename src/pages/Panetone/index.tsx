import React from 'react';
import { useParams } from 'react-router-dom';
import IPanetone from '../../@types/IPanetone';
import SideBar from '../../components/SideBar';
import getFinalScore from '../../helpers/finalScore';
import getFormatCurrencyBR from '../../helpers/formatCurrency';
import useApi from '../../hooks/useApi';

import { Container, Content, Title, Details, Info, FinalScore } from './styles';

interface PanetoneRouterProps {
  id: string;
}

const Panetone: React.FC = () => {
  const { id } = useParams<PanetoneRouterProps>();

  const { data: panetone } = useApi<IPanetone>(`/panetones/${id}`);

  if (!panetone) return null;

  return (
    <Container>
      <SideBar />
      {panetone && (
        <Content>
          <Title>
            <h1>{panetone.name}</h1>
            <h2>Marca: {panetone.marca.name}</h2>
          </Title>
          <Details>
            <img src={panetone.url} alt="panetone" />
            <Info>
              <ul>
                <li>
                  <strong>Características</strong>
                </li>
                <li>Peso: {panetone.grams}g</li>
                <li>Preço: {getFormatCurrencyBR(panetone.price)}</li>
                <li>Sabor: {panetone.flavor}</li>
                <li>Textura: {panetone.texture}</li>
                <li>Recheio: {panetone.filling}</li>
                <li>Embalagem: {panetone.packing}</li>
                <li>Custo-benefício: {panetone.costbenefit}</li>
              </ul>
              <FinalScore>
                <strong>Nota Final</strong>
                <section>{getFinalScore(panetone)}</section>
              </FinalScore>
            </Info>
          </Details>
        </Content>
      )}
    </Container>
  );
};

export default Panetone;
