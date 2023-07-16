import { useNavigate } from 'react-router-dom';
import TextInput from '@/components/Inputs/Text';
import PasswordInput from '@/components/Inputs/Password';
import ContainedButton from '@/components/Buttons/Contained';
import LinkButton from '@/components/Buttons/Link';

import { Body, WhiteBox, SignUpBox, LoginLabel, Logo, Title } from './styles';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <WhiteBox>
        <Logo />

        <Title>Cadastre-se agora!</Title>

        <SignUpBox>
          <TextInput label="Nome" />

          <TextInput label="E-mail" />

          <PasswordInput label="Senha" />

          <PasswordInput label="Confirme sua senha" />

          <ContainedButton>Cadastrar</ContainedButton>

          <LoginLabel>
            Já tem conta?{' '}
            <LinkButton onClick={() => navigate('/')}>Entre agora!</LinkButton>
          </LoginLabel>
        </SignUpBox>
      </WhiteBox>
    </Body>
  );
};

export default SignUp;
