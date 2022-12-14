import { MainContainer,FormContainer,SpanText,Spacer } from "./style";
import { InputContainer } from "./components/input/inputIndex";
import { ButtonContainer } from "./components/button/buttonIndex";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function App() {


  const schema = yup.object(
    {
      email: yup.string().email('Digite um email correto').required('Email requerido'),
      senha: yup.number('Senha numerica!').required('Senha requerida!').min(4,"Minimo de 4 caracteres")
    }
  );


  const {control,handleSubmit,watch,formState:{isValid,errors}} = useForm(
    {
      resolver:yupResolver(schema),
      mode:"onChange",
      reValidateMode:"onSubmit",
      defaultValues:{
        email: '',
      
      }
      
    }
  );

    console.log(isValid);
  const onSubmit = (formulario) => {
    console.log(formulario);
  }
 
  return (  
    <MainContainer> 
      <FormContainer>
        <SpanText>Login</SpanText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer title={"Email"}  name={'email'} errorMessage={errors.email?.message}controller={control}/>
            <InputContainer title={"Senha"} name={'senha'} errorMessage={errors.senha?.message}controller={control}/>
            <Spacer spacing={"30px"}/>
            <ButtonContainer disabled={isValid} value="Logar"/>
          </form>
      </FormContainer>
    </MainContainer>
  );
  
}

export default App;
