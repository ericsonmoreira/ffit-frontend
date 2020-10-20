import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPanetone from '../../@types/IPanetone';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import { Container, Content, Details } from './styles';

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
      <Content>
        <Details>
          <h1>{panetone.name}</h1>
          <img src={panetone.url} alt="panetone"/>
        </Details>
      </Content>
    </Container>
  );
};

export default Panetone;
