import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório'),
  price: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  flavor: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  texture: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  filling: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  packing: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  costbenefit: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  grams: Yup.number()
    .required('Campo Obrigatório')
    .positive('Precisar ser um número positivo'),
  url: Yup.string()
    .url('É necessário uma URL válida')
    .required('Campo Obrigatório'),
  marca: Yup.string().required('Campo Obrigatório'),
});

export default schema;
