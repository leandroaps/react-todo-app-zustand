import Footer from '@components/Footer';
import { render } from '@testing-library/react';
import { test } from 'vitest';

const props = {
    children: 'Footer'
};

test('Footer: renders component', async () => {
    render(<Footer {...props} />);
});
