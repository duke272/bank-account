import React from 'react';
import renderer from 'react-test-renderer';
import Transaction from '../Transaction';

describe('<Transaction />', () => {
  it('should render with an Iban number', () => {
    const transWithIban = {
      amount: 44.33,
      debit_credit: 'debit',
      description: 'description of transaction',
      name: 'Henk de Vries',
      iban: 'NL22RABO3154100547',
    };
    const tree = renderer
      .create(<Transaction trans={transWithIban} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without an Iban number', () => {
    const transWithoutIban = {
      amount: 44.33,
      debit_credit: 'debit',
      description: 'description of transaction',
      name: 'Henk de Vries',
    };
    const tree = renderer
      .create(<Transaction trans={transWithoutIban} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
