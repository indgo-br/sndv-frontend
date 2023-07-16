import { styled } from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  height: 45px;
  padding: ${({ theme }) => theme.spacing(2)};
  border: solid 1px ${({ theme }) => theme.colors.high.medium};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.spacing(1)};

  &:focus {
    outline: none;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const RelativeBox = styled.div`
  width: 100%;
  position: relative;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
