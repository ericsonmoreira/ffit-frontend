import React, { ChangeEvent, useState } from 'react';
import IPanetone from '../../@types/IPanetone';
import IMarca from '../../@types/IMarca';
import SideBar from '../../components/SideBar';

import {
  Container,
  Content,
  PanetonesList,
  PanetoneLabel,
  PanetoneItem,
  SearchInput,
  SelectMarcaSearch,
  GoToDetailsButton,
} from './styles';

import { FiMoreHorizontal } from 'react-icons/fi';
import useApi from '../../hooks/useApi';

const Home: React.FC = () => {
  const { data: panetones } = useApi<IPanetone[]>('/panetones');

  const { data: marcas } = useApi<IMarca[]>('/panetones');

  const [marcaSelected, setMarcaSelected] = useState('');

  const [textSearchInput, setTextSearchInput] = useState('');

  function handleChangeTextSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setTextSearchInput(event.target.value);
  }

  function handleChangeMarcaSelected(event: ChangeEvent<HTMLSelectElement>) {
    setMarcaSelected(event.target.value);
  }

  if (!panetones || !marcas) return null;

  return (
    <Container>
      <SideBar goAddButton />
      <Content>
        <h1>Catalottone</h1>
        <PanetonesList>
          <SearchInput
            type="text"
            placeholder="Busque pelo nome"
            onChange={handleChangeTextSearchInput}
          />

          <SelectMarcaSearch
            defaultValue=""
            onChange={handleChangeMarcaSelected}
          >
            <option value="">Todas</option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.name}
              </option>
            ))}
          </SelectMarcaSearch>

          {panetones
            .filter((panetone) => {
              if (marcaSelected === '') return true;
              return marcaSelected === String(panetone.marca.id);
            })
            .filter((panetone) => panetone.name.includes(textSearchInput))
            .map((panetone) => (
              <PanetoneItem key={panetone.id}>
                <section>
                  <img src={panetone.url} alt="panetone" />
                  <PanetoneLabel>
                    <strong>{panetone.name}</strong>
                    <section>Marca: {panetone.marca.name}</section>
                  </PanetoneLabel>
                </section>
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
