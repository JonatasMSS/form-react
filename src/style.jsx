import styled from "styled-components";


export const MainContainer = styled.div`

        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EF9C53;
`
export const FormContainer = styled.div`
    
        background-color: white;
        width: 500px;
        height: 400px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 15px #a35802;
        
        form{
                width: 100%;
               
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        
`
export const SpanText = styled.span`

        color: #f08000;
        font-size: 3rem;
        position: relative;
        top: -50px;


`
export const Spacer = styled.div`
        height: ${props => props.spacing};
`