import React, { useEffect, useState } from 'react';
import Panetone from '../../@types/Panetone';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { Container, Content, PanetonesList } from './styles';

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
        
        {panetones.map((panetone) => (
          <PanetonesList key={panetone.id}>
            <pre>{JSON.stringify(panetone, null, 2)}</pre>
          </PanetonesList>
        ))}
      </Content>
    </Container>
  );
};

export default Home;
