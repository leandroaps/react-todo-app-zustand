import CopyRight from '@components/CopyRight';
import { render } from '@testing-library/react';
import { test } from 'vitest';

test('CopyRight: renders component', async () => {
    render(<CopyRight />);
});
