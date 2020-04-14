export const formatAmount = (amount, debitCredit) => {
  const number = new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return `${debitCredit === 'debit' ? '+' : '-'}${number}`;
};
