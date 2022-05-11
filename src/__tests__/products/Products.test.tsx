import { render } from '@testing-library/react';
import { Products } from '../../components/products';

describe('/products/add', () => {
	test('user interface', () => {
		const { queryByPlaceholderText } = render(<Products />);
		expect(queryByPlaceholderText('Product name')).toBeTruthy();
	});
});