import { Controller, useController } from "react-hook-form"
import { Container,InputText } from "./inputStyle"



export const InputContainer = ({name,controller,title,errorMessage,...rest}) =>{


    return (
        <Container>
            <p>{title}</p>
            <Controller
                name={name}
                control={controller}
                render= {({field:{onChange,onBlur,value,ref}}) => <InputText onChange={onChange} onblur={onBlur}value={value} ref={ref} {...rest}></InputText> }
            />
            <p>{errorMessage ?? ''}</p>
        </Container>
    )

}