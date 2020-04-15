import React from 'react';
import renderer from 'react-test-renderer';
import Transaction from '../Transaction';

describe('<Transaction />', () => {
  it('should render with an Iban number', () => {
    const transWithIban = {
      formattedAmount: '+44,33',
      description: 'description of transaction',
      name: 'Henk de Vries',
      iban: 'NL22RABO3154100547',
    };
    const tree = renderer
      .create(<Transaction transaction={transWithIban} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without an Iban number', () => {
    const transWithoutIban = {
      formattedAmount: '+44,33',
      description: 'description of transaction',
      name: 'Henk de Vries',
    };
    const tree = renderer
      .create(<Transaction transaction={transWithoutIban} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
