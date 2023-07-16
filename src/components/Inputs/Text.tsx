import { Container, InputBase, Label } from './_styles';

type Props = {
  label: string;
  placeholder?: string;
};

const TextInput = ({ label, placeholder }: Props) => (
  <Container>
    <Label>{label}</Label>
    <InputBase placeholder={placeholder} />
  </Container>
);

export default TextInput;
