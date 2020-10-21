import React, { useEffect, useState } from 'react';
import IPanetone from '../../@types/IPanetone';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import {
  Container,
  Content,
  PanetonesList,
  PanetoneLabel,
  PanetoneItem,
  GoToDetailsButton,
} from './styles';

import { FiMoreHorizontal } from 'react-icons/fi';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [panetones, setPanetones] = useState<IPanetone[]>([]);

  useEffect(() => {
    try {
      setLoading(true);
      api.get('/panetones').then((response) => {
        setPanetones((old) => [...old, ...response.data]);
      });
    } catch (erro) {
      console.log(console.error(erro));
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <Container>
      <SideBar />
      <Content>
        <h1>Catalottone</h1>
        <PanetonesList>
          {panetones.map((panetone) => (
            <PanetoneItem key={panetone.id}>
              <section>
                <img src={panetone.url} alt="panetone" />
                <PanetoneLabel>
                  <strong>{panetone.name}</strong>
                  <section>Marca: {panetone.marca.name}</section>
                </PanetoneLabel>
              </section>
              <GoToDetailsButton to={`/panetones/${panetone.id}`}>
                <FiMoreHorizontal size={24} color="rgba(0,0,0, 0.8)" />
              </GoToDetailsButton>
            </PanetoneItem>
          ))}
        </PanetonesList>
      </Content>
    </Container>
  );
};

export default Home;
