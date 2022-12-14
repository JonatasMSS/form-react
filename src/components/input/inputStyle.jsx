import styled from "styled-components";

export const Container = styled.div`
    
    padding: 10px;
    width: 80%;
`
export const InputText = styled.input`
    border: 2px solid #FAAB36;
    padding: 10px;
    border-radius: 20px;
    width: 95%;
        :focus{
            border: 2px solid #da8403 ;
            outline: none;
        }
        ::placeholder{
            color:grey;
        }
`