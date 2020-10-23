# FFIT - Processo seletivo

Esse projeto consiste no desenvolvimento de uma aplicação que simula um _"Catálogo de Panetones"_.

## Catalottone - Seu Catálogo de Panetones

Puxando um pouco para meu ladro criatico, resolvi nomear essa aplicação de Catalottone, fazendo assim uma alusçào a combinação das palavras _catálogo_ e _panetone_. Todos os dados fictícios foram obtidos dessa [referência](https://www.huffpostbrasil.com/entry/os-melhores-panettones-natal_br_5dfd0382e4b05b08bab4fd7b).

## Requisitos funcionais

1. Uma tela explicando o que é um panetone.
2. Uma lista de panetones de algumas marcas (Bauducco, Nestlé, etc) com fotos (dos panetones) e com filtro (pelo menos filtrar por marca).
3. Tela de detalhamento contendo informações detalhadas do panetone selecionado (ex: peso, informações nutricionais, preço - esses dados podem ser totalmente fictícios).

## Requisitos não funcionais

1. O código deve ser feito utilizando ReactJS ou React Native (Javascript ou Typescript).
2. O código deve ser disponibilizado através de um repositório de código fonte (bitbucket, github ou gitlab).

## O que foi usado

- Linguagem base: [TypeScript](https://www.typescriptlang.org/).
- Framework: [ReactJS](https://reactjs.org/).
- Dependências:
  - [Axios](https://github.com/axios/axios): Cliente HTTP, que funciona tanto no browser quanto em Node.js. Usado para fazer as requisições RESP.
  - [styled-components](https://styled-components.com/): Um pacote para React e React Native que permite usar estilos ao nível de componente. Eles são escritos em uma mistura de JavaScript com CSS.
  - [Formik](https://formik.org/docs/overview): Um pacote para gerenciar estados de formulários.
  - [Yup](https://github.com/jquense/yup): Um pacote para gerenciar validação de dados. Usado em conjunto com o Formik.
  - [SWR](https://swr.vercel.app/): Um pacote desenvolvido pela Vercel. SWR é uma sigla para _Stale-While-Revalidate_ (tradução literal: traga os dados antigos enquanto avalia se tem novos dados).
  - [React Icons](https://react-icons.github.io/): Um pacote muito utilizado no desenvolvimento de aplicações React, o mesmo provem a junção de bibliotecas de icones famosos.
- Depenências de Desenvolvimento:
  - [Eslint](https://eslint.org/): Uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript.
  - [JSON Server](https://github.com/typicode/json-server): Um biblioteca que permite criar um webservice REST JSON simulando uma API.

## Como testar

Primeiramente, faça o _download_ do projeto. Entre na pasta do projeto e execute o comando para instalar as dependências do projeto:

```bash
# caso use npm
npm install

# caso use yarn
yarn
  ```
