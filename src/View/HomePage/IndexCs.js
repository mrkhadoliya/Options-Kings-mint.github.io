import styled from 'styled-components';
 

export const MainPage = styled.div`
    display: flex;
    height:100vh;
    align-items: center;
    justify-content: center;
    width:100%;
    background-image: linear-gradient(
        180deg, #192D34 0%, #5AE2A6 100%);
    color:#fff ;
    margin: auto;
    @media only screen and (max-width:425px) { 
        height:100%;
        padding: 20px 0
    }
`

export const BoxArea = styled.div`
        border: 2px dashed #192d34;
        padding: 3rem 2rem;
        border-radius: 10px;
        text-align:center;
        @media only screen and (max-width:425px) { 
            padding: 1rem 1rem;
            border: 1px dashed #192d34;
        }
`
export const BoxTop = styled.div`
        padding-top:2rem
`
export const BoxPic = styled.div`
    border-radius: 5px
`