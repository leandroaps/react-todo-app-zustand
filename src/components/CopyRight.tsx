import { Typography } from '@mui/material';
import { memo } from 'react';

const Copyright = () => {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary'
            }}
        >
            {'TodoList with Zustand - leandroaps - Copyright © '}
            {new Date().getFullYear()}.
        </Typography>
    );
};

export default memo(Copyright);
