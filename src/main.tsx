import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import theme from './theme/';

const App = lazy(() => import('./App'));
const container = document.getElementById('root') as HTMLElement;

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
    );
}
