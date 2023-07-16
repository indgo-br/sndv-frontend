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

const Login = () => (
  <Body>
    <WhiteBox>
      <Logo />

      <Title>Bem-vindo(a)!</Title>

      <TextInput label="E-mail" placeholder="email@exemplo.com" />
      <PasswordInput label="Senha" />

      <ContainedButton onClick={() => {}}>Entrar</ContainedButton>

      <SignUpLabel>
        Não possui conta?{' '}
        <LinkButton onClick={() => {}}>Cadastre-se!</LinkButton>
      </SignUpLabel>
    </WhiteBox>
    <LeftIcon />
    <RightIcon />
  </Body>
);

export default Login;
