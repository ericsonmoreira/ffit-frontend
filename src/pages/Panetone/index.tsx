import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPanetone from '../../@types/IPanetone';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { Container } from './styles';

interface PanetoneRouterProps {
  id: string;
}

const Panetone: React.FC = () => {
  const { id } = useParams<PanetoneRouterProps>();

  const [panetone, setPanetone] = useState<IPanetone>({} as IPanetone);

  useEffect(() => {
    api.get(`/panetones/${id}`).then((response) => {
      setPanetone(response.data);
    });
  }, [id]);

  return (
    <Container>
      <SideBar />
      <h1>Panetone Page: {panetone.id}</h1>
      <h2>Nome: {panetone.name}</h2>
      <img src={panetone.url} alt="panetone"/>
    </Container>
  );
};

export default Panetone;
