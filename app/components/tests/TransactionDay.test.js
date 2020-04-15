import React from 'react';
import renderer from 'react-test-renderer';
import TransactionDay from '../TransactionDay';

const transactionDay = {
  id: '0315778504.2017-07-19',
  iban: 'NL92RABO0315778504',
  date: '2017-07-19T20:40:29.000Z',
  formattedDate: '19-07-2017',
  balances: [
    { amount: 4861.79, debit_credit: 'credit', date: '2017-07-18' },
    { amount: 4836.77, debit_credit: 'credit', date: '2017-07-19' },
  ],
  transactions: [
    {
      iban: '',
      name: 'Bizcuit',
      formattedAmount: '+0,02',
      date: '2017-07-19',
      description: 'Betalingsnummer 2913045c',
    },
    {
      iban: '',
      name: 'Bizcuit',
      formattedAmount: '+10,00',
      date: '2017-07-19',
      description: 'Betalingsnummer e1e33717',
    },
    {
      iban: '',
      name: 'Bizcuit',
      formattedAmount: '+15,00',
      date: '2017-07-19',
      description: 'Betalingsnummer 67805d60',
    },
  ],
};

describe('<TransactionDay />', () => {
  it('should render', () => {
    const tree = renderer
      .create(<TransactionDay transactionDay={transactionDay} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
