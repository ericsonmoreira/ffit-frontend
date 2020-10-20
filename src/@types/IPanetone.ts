interface IPanetone {
  id: number;
  name: string;
  price: number;
  flavor: number; // nota do sabor
  texture: number; // nota da textura
  filling: number; // nota do recheio
  packing: number; // nota do pacote
  costbenefit: number; // nota do custo benefício
  grams: number;
  url: string;
  id_marca: number;
}

export default IPanetone;
