import { render } from '@testing-library/react';
import React from 'react';
import { UploadProduct } from '../../components/Products';

describe('/products/add', () => {
	test('user interface', () => {
		const { queryByPlaceholderText } = render(<UploadProduct />);
		expect(queryByPlaceholderText('Product name')).toBeTruthy();
	});
});
