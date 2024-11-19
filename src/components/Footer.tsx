import { BottomNavigation, Paper } from '@mui/material';
import { memo, ReactNode } from 'react';

const Footer = ({ children }: { children: ReactNode }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation>{children}</BottomNavigation>
        </Paper>
    );
};

export default memo(Footer);
