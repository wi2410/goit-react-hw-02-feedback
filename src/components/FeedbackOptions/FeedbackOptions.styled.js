import styled from '@emotion/styled'

export const Button = styled.button`
    margin: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px; 
    cursor: pointer;
    &:hover{
        color: black;
        background-color: grey;
        
    }
    &:active{
        color: white;
        background-color: blue;
    }
    `