import { Container } from '@mui/material';
import { memo } from 'react';
import Copyright from './components/CopyRight/CopyRight';
import Footer from './components/Footer/Footer';
import TodoList from './components/TodoList/TodoList';

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
