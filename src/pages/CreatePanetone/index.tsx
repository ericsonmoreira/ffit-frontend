import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import IMarca from '../../@types/IMarca';
import FieldSetSelect from '../../components/FieldSetSelect';
import FieldSetText from '../../components/FieldSetText';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import schema from './schemaValidation';

import { Container, Content } from './styles';

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
          {({ isSubmitting, values }) => (
            <Form>
              {/* name */}
              <FieldSetText name="name" label="Nome" />

              {/* price */}
              <fieldset>
                <legend>Preço</legend>
                <Field type="number" name="price" min={0} />
                <section>{values.price}</section>
                <ErrorMessage name="price" component="div" />
              </fieldset>

              {/* flavor */}
              <fieldset>
                <legend>Sabor</legend>
                <Field type="range" name="flavor" step="0.01" max={5} />
                <section>{values.flavor}</section>
                <ErrorMessage name="flavor" component="div" />
              </fieldset>

              {/* texture */}
              <fieldset>
                <legend>Textura</legend>
                <Field type="range" name="texture" />
                <section>{values.texture}</section>
                <ErrorMessage name="texture" component="div" />
              </fieldset>

              {/* filling */}
              <fieldset>
                <legend>Recheio</legend>
                <Field type="range" name="filling" />
                <section>{values.filling}</section>
                <ErrorMessage name="filling" component="div" />
              </fieldset>

              {/* packing */}
              <fieldset>
                <legend>Recheio</legend>
                <Field type="range" name="packing" />
                <section>{values.packing}</section>
                <ErrorMessage name="packing" component="div" />
              </fieldset>

              {/* costbenefit */}
              <fieldset>
                <legend>Custo-benefício</legend>
                <Field type="range" name="costbenefit" />
                <section>{values.costbenefit}</section>
                <ErrorMessage name="costbenefit" component="div" />
              </fieldset>

              {/* grams */}
              <fieldset>
                <legend>Gramas</legend>
                <Field type="number" name="grams" />
                <section>{values.grams}</section>
                <ErrorMessage name="grams" component="div" />
              </fieldset>

              {/* url */}
              <fieldset>
                <legend>Gramas</legend>
                <Field type="url" name="url" />
                <section>{values.url}</section>
                <ErrorMessage name="url" component="div" />
              </fieldset>

              {/* marca deve ser um select */}
              <FieldSetSelect
                name="marca"
                label="Marca"
                options={marcas.map((marca) => ({
                  value: String(marca.id),
                  label: marca.name,
                }))}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default CreatePanetone;
