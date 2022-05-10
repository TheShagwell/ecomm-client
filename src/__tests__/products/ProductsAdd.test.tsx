import { render } from '@testing-library/react';
import React from 'react';
import { ProductsAdd } from '../../components/Products';

describe('/products/add', () => {
	test('user interface', () => {
		const { queryByPlaceholderText } = render(<ProductsAdd />);
		expect(queryByPlaceholderText('Product name')).toBeTruthy();
	});
});
