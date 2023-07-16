import styled from 'styled-components';
import NdvLogo from '@/assets/ndv_logo.png';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.primary};
  display: flex;
`;

export const WhiteBox = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.high.main};
  padding: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const LoginLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0px;
`;

export const Logo = styled.img.attrs({ src: NdvLogo, alt: 'Logo NDV' })`
  width: 60px;
  height: 60px;
`;
