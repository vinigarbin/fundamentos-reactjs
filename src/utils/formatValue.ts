const formatValue = (value: number, type = 'currency'): string => {
  if (type === 'date') {
    return Intl.DateTimeFormat('pt-BR').format(value);
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO
};

/*
 */
export default formatValue;
