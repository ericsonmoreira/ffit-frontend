import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, GoBackButton } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import boloImg from '../../images/bolo.svg';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Logo src={boloImg} alt="catalottone" />
      <GoBackButton onClick={goBack}>
        <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.8)" />
      </GoBackButton>
    </Container>
  );
};

export default SideBar;
