import { styled } from 'styled-components';
import { ButtonBase } from './_styles';

const LinkBase = styled(ButtonBase)`
  height: auto;
  width: auto;
  background-color: transparent;
  padding: 0px;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: underline;
  font-weight: 700;
`;

const LinkButton = ({ onClick, children }: Props) => (
  <LinkBase onClick={onClick}>{children}</LinkBase>
);

type Props = {
  children: string;
  onClick: () => void;
};

export default LinkButton;
