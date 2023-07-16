import { styled } from 'styled-components';
import { ButtonBase } from './_styles';

const IconBase = styled(ButtonBase)<IconBaseProps>`
  width: 45px;
  color: ${(props) =>
    props.type === 'contained'
      ? props.theme.colors.high.main
      : props.theme.colors.low.main};
  border-radius: ${(props) =>
    props.type === 'contained'
      ? props.theme.spacing(1)
      : `0px ${props.theme.spacing(1)} ${props.theme.spacing(1)} 0px`};
  background-color: ${(props) =>
    props.type === 'contained'
      ? props.theme.colors.primary.main
      : props.theme.colors.high.medium};
`;

const IconButton = ({ type = 'contained', onClick, children }: Props) => (
  <IconBase type={type} onClick={onClick}>
    {children}
  </IconBase>
);

type ButtonType = 'contained' | 'input';

type Props = {
  type?: ButtonType;
  onClick: () => void;
  children: React.ReactNode;
};

type IconBaseProps = {
  type: ButtonType;
};

export default IconButton;
