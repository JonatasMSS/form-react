import { Container } from "./buttonStyle"





export const ButtonContainer = ({value,onClick,disabled}) => {
    return(
        <Container>
            <button onClick={onClick} type={"submit"} disabled={!disabled}>{value}</button>
        </Container>
        
    )
}