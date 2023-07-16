import { styled } from 'styled-components';
import { ButtonBase } from './_styles';

const ContainedBase = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.high.main};
`;

const ContainedButton = ({ children, ...props }: Props) => (
  <ContainedBase {...props}>{children}</ContainedBase>
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
};

export default ContainedButton;
