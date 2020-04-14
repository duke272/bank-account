import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('<Header />', () => {
  it('should render without data', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a negative amount', () => {
    const tree = renderer
      .create(<Header amount={124.77} debit_credit="credit" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a positive amount', () => {
    const tree = renderer
      .create(<Header amount={55.66} debit_credit="debit" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
