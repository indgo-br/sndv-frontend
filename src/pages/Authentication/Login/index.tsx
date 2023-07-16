import { useNavigate } from 'react-router-dom';
import TextInput from '@/components/Inputs/Text';
import PasswordInput from '@/components/Inputs/Password';
import ContainedButton from '@/components/Buttons/Contained';
import LinkButton from '@/components/Buttons/Link';

import {
  Body,
  WhiteBox,
  Logo,
  Title,
  LeftIcon,
  RightIcon,
  SignUpLabel,
} from './styles';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <WhiteBox>
        <Logo />

        <Title>Bem-vindo(a)!</Title>

        <TextInput label="E-mail" placeholder="email@exemplo.com" />
        <PasswordInput label="Senha" />

        <ContainedButton>Entrar</ContainedButton>

        <SignUpLabel>
          Não possui conta?{' '}
          <LinkButton onClick={() => navigate('/cadastrar')}>
            Cadastre-se!
          </LinkButton>
        </SignUpLabel>
      </WhiteBox>
      <LeftIcon />
      <RightIcon />
    </Body>
  );
};

export default Login;
