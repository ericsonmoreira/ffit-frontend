import IPanetone from '../@types/IPanetone';

/**
 * Faz o calculo da nota final. A Nota final é a média simples da soma das notas de sabor, 
 * textura, recheio, embalagem e custo-benefício.
 * @param panetone Objeto Panetone.
 */
function getFinalScore(panetone: IPanetone) {
  const { flavor, texture, filling, packing, costbenefit } = panetone;
  const value = (flavor + texture + filling + packing + costbenefit) / 5;
  return value.toFixed(2);
}

export default getFinalScore;
