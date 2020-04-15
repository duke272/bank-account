import React from 'react';
import renderer from 'react-test-renderer';
import TransactionList from '../TransactionList';

const accountInfo = [
  {
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
        date: '2017-07-19',
        description: 'Betalingsnummer 2913045c',
        formattedAmount: '+0,02',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-19',
        description: 'Betalingsnummer e1e33717',
        formattedAmount: '+10,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-19',
        description: 'Betalingsnummer 67805d60',
        formattedAmount: '+15,00',
      },
    ],
    formattedDate: '19-07-2017',
  },
  {
    id: '0315778504.2017-07-18',
    iban: 'NL92RABO0315778504',
    date: '2017-07-18T20:39:34.000Z',
    balances: [
      { amount: 4872.81, debit_credit: 'credit', date: '2017-07-17' },
      { amount: 4861.79, debit_credit: 'credit', date: '2017-07-18' },
    ],
    transactions: [
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-18',
        description: 'Betalingsnummer b44893ce',
        formattedAmount: '+11,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-18',
        description: 'Betalingsnummer 80cdc42c',
        formattedAmount: '+0,02',
      },
    ],
    formattedDate: '18-07-2017',
  },
  {
    id: '0315778504.2017-07-14',
    iban: 'NL92RABO0315778504',
    date: '2017-07-14T20:39:58.000Z',
    balances: [
      { amount: 4872.92, debit_credit: 'credit', date: '2017-07-13' },
      { amount: 4872.81, debit_credit: 'credit', date: '2017-07-14' },
    ],
    transactions: [
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-14',
        description: 'Betalingsnummer be0dc54c',
        formattedAmount: '+0,11',
      },
    ],
    formattedDate: '14-07-2017',
  },
  {
    id: '0315778504.2017-07-07',
    iban: 'NL92RABO0315778504',
    date: '2017-07-07T21:46:30.000Z',
    balances: [
      { amount: 4888.92, debit_credit: 'credit', date: '2017-07-06' },
      { amount: 4872.92, debit_credit: 'credit', date: '2017-07-07' },
    ],
    transactions: [
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-07-07',
        description: 'Betalingsnummer be87ad7a',
        formattedAmount: '+16,00',
      },
    ],
    formattedDate: '07-07-2017',
  },
  {
    id: '0315778504.2017-07-06',
    iban: 'NL92RABO0315778504',
    date: '2017-07-06T21:38:14.000Z',
    balances: [
      { amount: 4910.76, debit_credit: 'credit', date: '2017-07-05' },
      { amount: 4888.92, debit_credit: 'credit', date: '2017-07-06' },
    ],
    transactions: [
      {
        iban: '',
        name: 'Debetrente',
        date: '2017-07-06',
        description: 'Debetrente, Periode 01-04-2017 t/m 30-06-2017',
        formattedAmount: '+0,04',
      },
      {
        iban: '',
        name: 'Kosten',
        date: '2017-07-06',
        description: 'Kosten, Periode 01-04-2017 t/m 30-06-2017',
        formattedAmount: '+21,80',
      },
    ],
    formattedDate: '06-07-2017',
  },
  {
    id: '0315778504.2017-06-21',
    iban: 'NL92RABO0315778504',
    date: '2017-06-20T22:39:47.000Z',
    balances: [
      { amount: 4915.76, debit_credit: 'credit', date: '2017-06-20' },
      { amount: 4910.76, debit_credit: 'credit', date: '2017-06-21' },
    ],
    transactions: [
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-21',
        description: 'Betalingsnummer b33bc436',
        formattedAmount: '+5,00',
      },
    ],
    formattedDate: '21-06-2017',
  },
  {
    id: '0315778504.2017-06-20',
    iban: 'NL92RABO0315778504',
    date: '2017-06-20T21:40:37.000Z',
    balances: [
      { amount: 2.76, debit_credit: 'credit', date: '2017-06-19' },
      { amount: 4915.76, debit_credit: 'credit', date: '2017-06-20' },
    ],
    transactions: [
      {
        iban: 'NL22RABO3154100547',
        name: 'MINOX B.V.',
        date: '2017-06-20',
        description:
          'MINOX B.V., Vendelier 25 27 3905PB VEENENDAAL Nederland NL, Aanvulling saldo (ivm KiKi donaties op Accountancy Expo)',
        formattedAmount: '-5.000,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer d1709be2',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 5da68160',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer fd45ce68',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer fa1d856e',
        formattedAmount: '+1,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer ec38d047',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 47b41578',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer f01b9081',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer a4f651b2',
        formattedAmount: '+1,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 42850372',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer b2bf2205',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer e49023ac',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 3b9e870e',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 53be1da9',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 5231b267',
        formattedAmount: '+10,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 63377f6d',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 7fdfb9f4',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 68129304',
        formattedAmount: '+5,00',
      },
      {
        iban: '',
        name: 'Bizcuit',
        date: '2017-06-20',
        description: 'Betalingsnummer 12e0dfbb',
        formattedAmount: '+5,00',
      },
    ],
    formattedDate: '20-06-2017',
  },
];

describe('<TransactionList />', () => {
  it('should render', () => {
    const tree = renderer
      .create(<TransactionList accountInfo={accountInfo} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
