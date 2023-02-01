export const formatCurrency = (input: number, digit: number = 2) => {
  const formatter = new Intl.NumberFormat('en', {
    currency: 'JPY',
    style: 'currency',
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  });

  return formatter.format(input || 0);
};
