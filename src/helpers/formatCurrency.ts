const numberFormat = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/**
 * Retorna uma string formata com a moeda brasileira do valor passado.
 * @param value Valor
 */
function getFormatCurrencyBR(value: number): string {
  return numberFormat.format(value);
}

export default getFormatCurrencyBR;
