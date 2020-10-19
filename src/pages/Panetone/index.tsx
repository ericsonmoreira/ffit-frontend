import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

interface PanetoneRouterProps {
  id: string;
}

const Panetone: React.FC = () => {
  const { id } = useParams<PanetoneRouterProps>();

  return (
    <Container>
      <h1>Panetone Page: {id}</h1>
    </Container>
  );
};

export default Panetone;
