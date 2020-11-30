import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ShopButtons from './shop-buttons';
import { Product } from '@react-eshop-demo/product';

describe('ShopButtons', () => {
  let mockAddToBasket;
  let mockProduct: Product;

  beforeEach(() => {
    mockAddToBasket = jest.fn((product: Product, amount: number) => {});
    mockProduct = {
      name: 'Test',
      id: 1,
      description: 'Lorem ipsum',
    };
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <ShopButtons addToBasket={mockAddToBasket} product={mockProduct} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should execute addToBasket', () => {
    const { getByRole } = render(
      <ShopButtons addToBasket={mockAddToBasket} product={mockProduct} />
    );

    const input = getByRole('spinbutton') as HTMLInputElement;
    input.value = '4';
    fireEvent.change(input);

    const button = getByRole('button') as HTMLButtonElement;
    button.click();
    expect(mockAddToBasket).toHaveBeenCalled();
  });
});
