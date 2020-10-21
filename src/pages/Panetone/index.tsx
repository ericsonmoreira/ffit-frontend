import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPanetone from '../../@types/IPanetone';
import SideBar from '../../components/SideBar';
import getFinalScore from '../../helpers/finalScore';
import getFormatCurrencyBR from '../../helpers/formatCurrency';
import api from '../../services/api';

import { Container, Content, Title, Details, Info, FinalScore } from './styles';

interface PanetoneRouterProps {
  id: string;
}

const Panetone: React.FC = () => {
  const { id } = useParams<PanetoneRouterProps>();

  const [loading, setLoading] = useState(true);
  const [panetone, setPanetone] = useState<IPanetone>();

  useEffect(() => {
    try {
      setLoading(true);
      api.get(`/panetones/${id}`).then((response) => {
        setPanetone(response.data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) return null;

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
