import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, GoBackButton, GoAddButton } from './styles';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import boloImg from '../../images/bolo.svg';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Logo src={boloImg} alt="catalottone" />
      
      <section>
        <GoAddButton to="/panetones/add">
          <FiPlus size={24} color="rgba(0, 0, 0, 0.8)" />
        </GoAddButton>
        <GoBackButton onClick={goBack}>
          <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.8)" />
        </GoBackButton>
      </section>
    </Container>
  );
};

export default SideBar;
