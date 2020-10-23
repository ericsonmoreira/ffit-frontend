import React from 'react';

import { Container, Name, Avatar } from './styles';

import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const DeveloperInfo: React.FC = () => {
  return (
    <Container>
      <Avatar
        src="https://avatars1.githubusercontent.com/u/1212015?v=4"
        alt="Github"
      />
      <div>
        <Name>Éricson Rogério Moreira</Name>
        <section>
          <GoLocation size={20} />
          <strong>Fortaleza - CE</strong>
        </section>

        <section>
          <FaGithub size={20} />
          <strong>
            <a href="https://github.com/ericsonmoreira">
              https://github.com/ericsonmoreira
            </a>
          </strong>
        </section>
        <section>
          <FiMail size={20} />
          <strong>moreira.ericson@gmail.com</strong>
        </section>
        <section>
          <FaWhatsapp size={20} />
          <strong>(85) 99792-6510</strong>
        </section>
      </div>
    </Container>
  );
};

export default DeveloperInfo;
