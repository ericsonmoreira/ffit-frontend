import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, GoBackButton, GoAddButton } from './styles';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import boloImg from '../../images/bolo.svg';

interface SideBarProps {
  goAddButton?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ goAddButton = false }) => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Logo src={boloImg} alt="catalottone" />

      <section>
        {goAddButton && (
          <GoAddButton to="/panetones/add">
            <FiPlus size={24} color="rgba(0, 0, 0, 0.8)" />
          </GoAddButton>
        )}
        <GoBackButton onClick={goBack}>
          <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.8)" />
        </GoBackButton>
      </section>
    </Container>
  );
};

export default SideBar;
