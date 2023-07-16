import { Container, InputBase, Label } from './_styles';

const TextInput = ({ label, ...props }: Props) => (
  <Container>
    <Label>{label}</Label>
    <InputBase {...props} />
  </Container>
);

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default TextInput;
