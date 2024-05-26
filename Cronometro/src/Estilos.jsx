import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap');

    *{
        font-family: "Roboto Slab", serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body{
        width: 100%;
        height: 100%;
    }

    #root{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const MainWrapper = styled.main`
    width: 50%;
    height: 45%;
    border: #6B2B06 2px solid;
    border-radius: 10px;
`

export const BotoesWrapper = styled.div`
    width: 100%;
    height: 20%;
    background: #6B2B06;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
`

export const Botao = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    background: #E5E7E6;
    font-size: 14px;
    color: #141301;
    text-align: center;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`

export const TempoWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: 120px;
    }
`