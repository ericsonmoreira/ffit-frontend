import React, { useEffect, useState } from 'react';
import Panetone from '../../@types/Panetone';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import {
  Container,
  Content,
  PanetonesList,
  PanetoneItem,
  GoToDetailsButton,
} from './styles';

import { FiMoreHorizontal } from 'react-icons/fi';

const Home: React.FC = () => {
  const [panetones, setPanetones] = useState<Panetone[]>([]);

  useEffect(() => {
    api.get('/panetones').then((response) => {
      setPanetones((old) => [...old, ...response.data]);
    });
  }, [setPanetones]);

  return (
    <Container>
      <SideBar />
      <Content>
        <h1>Catalottone</h1>
        <PanetonesList>
          {panetones.map((panetone) => (
            <PanetoneItem key={panetone.id}>
              <strong>{panetone.name}</strong>
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
