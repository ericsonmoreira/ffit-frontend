import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import IMarca from '../../@types/IMarca';
import FieldSetRange from '../../components/FieldSetRange';
import FieldSetSelect from '../../components/FieldSetSelect';
import FieldSetText from '../../components/FieldSetText';
import SideBar from '../../components/SideBar';
import getFormatCurrencyBR from '../../helpers/formatCurrency';
import api from '../../services/api';

import schema from './schemaValidation';

import { Container, Content, SaveButton, FormPanetone } from './styles';

const initialValues = {
  name: '',
  price: 0,
  flavor: 0, // nota do sabor
  texture: 0, // nota da textura
  filling: 0, // nota do recheio
  packing: 0, // nota do pacote
  costbenefit: 0, // nota do custo benefício
  grams: 0,
  url: '',
  marca: '',
};

const CreatePanetone: React.FC = () => {
  const [marcas, setMarcas] = useState<IMarca[]>([]);

  useEffect(() => {
    try {
      api.get('/marcas').then((response) => {
        setMarcas((old) => [...old, ...response.data]);
      });
    } catch (erro) {
      console.log(console.error(erro));
    }
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <h1>CreatePanetone</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <FormPanetone>
              <FieldSetText name="name" label="Nome" />

              <FieldSetRange
                name="price"
                label="Preço"
                max={100}
                format={getFormatCurrencyBR}
              />

              <FieldSetRange name="flavor" label="Sabor" max={5} />

              <FieldSetRange name="texture" label="Textura" max={5} />

              <FieldSetRange name="filling" label="Recheio" max={5} />

              <FieldSetRange name="packing" label="Embalagem" max={5} />

              <FieldSetRange
                name="costbenefit"
                label="Custo-benefício"
                max={5}
              />

              <FieldSetRange name="grams" label="Gramas" max={5} />

              <FieldSetText name="url" label="URL da Imagem" />

              <FieldSetSelect
                name="marca"
                label="Marca"
                options={marcas.map((marca) => ({
                  value: String(marca.id),
                  label: marca.name,
                }))}
              />

              <SaveButton type="submit" disabled={isSubmitting}>
                Salvar Panetone
              </SaveButton>
            </FormPanetone>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default CreatePanetone;
