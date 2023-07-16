import { styled } from 'styled-components';
import { ButtonBase } from './_styles';

const ContainedBase = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.high.main};
`;

const ContainedButton = ({ onClick, children }: Props) => (
  <ContainedBase onClick={onClick}>{children}</ContainedBase>
);

type Props = {
  children: string;
  onClick: () => void;
};

export default ContainedButton;
