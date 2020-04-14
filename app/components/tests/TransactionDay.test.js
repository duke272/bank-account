import React from 'react';
import renderer from 'react-test-renderer';
import TransactionDay from '../TransactionDay';

const transaction = {
  id: '0315778504.2017-07-19',
  iban: 'NL92RABO0315778504',
  date: '2017-07-19T20:40:29.000Z',
  balances: [
    { amount: 4861.79, debit_credit: 'credit', date: '2017-07-18' },
    { amount: 4836.77, debit_credit: 'credit', date: '2017-07-19' },
  ],
  transactions: [
    {
      iban: '',
      name: 'Bizcuit',
      amount: 0.02,
      debit_credit: 'debit',
      date: '2017-07-19',
      description: 'Betalingsnummer 2913045c',
    },
    {
      iban: '',
      name: 'Bizcuit',
      amount: 10,
      debit_credit: 'debit',
      date: '2017-07-19',
      description: 'Betalingsnummer e1e33717',
    },
    {
      iban: '',
      name: 'Bizcuit',
      amount: 15,
      debit_credit: 'debit',
      date: '2017-07-19',
      description: 'Betalingsnummer 67805d60',
    },
  ],
};

describe('<TransactionDay />', () => {
  it('should render', () => {
    const tree = renderer
      .create(<TransactionDay transaction={transaction} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
