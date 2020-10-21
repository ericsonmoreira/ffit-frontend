/**
 * Retorna uma string formata com a moeda brasileira do valor passado.
 * @param value Valor
 */
function getFormatCurrencyBR(value: number): string {
  return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

export default getFormatCurrencyBR;
