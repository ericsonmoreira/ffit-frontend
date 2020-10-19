import React from "react";

import { Container } from "./styles";

interface PanetoneDetailsProps {
  id: number;
}

const PanetoneDetails: React.FC<PanetoneDetailsProps> = ({ id }) => {
  return (
    <Container>
      <h1>PanetoneDetails Page: {id}</h1>
    </Container>
  );
};

export default PanetoneDetails;
