import Copyright from '@components/CopyRight';
import Footer from '@components/Footer';
import TodoList from '@components/TodoList';
import { Container } from '@mui/material';
import { memo } from 'react';

function App() {
    return (
        <Container>
            <TodoList />
            <Footer>
                <Copyright />
            </Footer>
        </Container>
    );
}

export default memo(App);
