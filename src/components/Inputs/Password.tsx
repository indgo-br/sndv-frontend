import IconButton from '@/components/Buttons/Icon';
import { useState } from 'react';
import { styled } from 'styled-components';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Container, InputBase, Label, RelativeBox, IconBox } from './_styles';

const Input = styled(InputBase)`
  padding-right: ${({ theme }) => theme.spacing(7)};
`;

const PasswordInput = ({ label }: Props) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <Label>{label}</Label>
      <RelativeBox>
        <Input type={hidePassword ? 'password' : 'text'} />
        <IconBox>
          <IconButton
            onClick={() => setHidePassword((current) => !current)}
            type="input"
          >
            {hidePassword ? (
              <FaEye style={{ fontSize: 20 }} />
            ) : (
              <FaEyeSlash style={{ fontSize: 20 }} />
            )}
          </IconButton>
        </IconBox>
      </RelativeBox>
    </Container>
  );
};

type Props = {
  label: string;
};

export default PasswordInput;
