import styled from 'styled-components';

export const Input = styled.input<{ $inputColor?: string }>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${(props) => props.$inputColor || '#BF4F74'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;
