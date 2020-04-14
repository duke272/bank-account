import { formatAmount } from '../helpers';

describe('helpers', () => {
  it('formatAmount rounds to 2 digits', () => {
    const amount = 22.44567;
    const debitCredit = 'debit';
    const expectedResult = '+22,45';

    expect(formatAmount(amount, debitCredit)).toEqual(expectedResult);
  });

  it('formatAmount adds 2 digits', () => {
    const amount = 22;
    const debitCredit = 'debit';
    const expectedResult = '+22,00';

    expect(formatAmount(amount, debitCredit)).toEqual(expectedResult);
  });

  it('formatAmount shows negative numbers', () => {
    const amount = 22.0;
    const debitCredit = 'credit';
    const expectedResult = '-22,00';

    expect(formatAmount(amount, debitCredit)).toEqual(expectedResult);
  });
});
