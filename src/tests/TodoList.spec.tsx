import TodoList from '@components/TodoList';
import { render } from '@testing-library/react';
import { test } from 'vitest';

test('TodoList: renders component', async () => {
    render(<TodoList />);
});
