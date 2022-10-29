import styled from '@emotion/styled'

export const Button = styled.button`
    margin:10px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px; 
    cursor: pointer;
    transition: transform .2s;
    &:hover{
        color: black;
        background-color: grey;
        
    }
    &:active{
        color: white;
        background-color: blue;
    }
    `