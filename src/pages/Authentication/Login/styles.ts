import styled from 'styled-components';
import NdvLogo from '@/assets/ndv_logo.png';
import InformedDecisionIcon from '@/assets/icons/informed_decision.svg';
import ProblemSolvingIcon from '@/assets/icons/problem_solving.svg';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 380px) {
    align-items: flex-start;
  }
`;

export const WhiteBox = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colors.high.main};
  margin: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  z-index: 10;

  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Logo = styled.img.attrs({ src: NdvLogo, alt: 'Logo NDV' })`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0px;
`;

export const LeftIcon = styled.img.attrs({
  src: InformedDecisionIcon,
  alt: 'Trabalhando juntos numa decisão',
})`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 500px;

  @media (max-width: 1060px) {
    width: 400px;
  }

  @media (max-width: 860px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    left: auto;
  }
`;

export const RightIcon = styled.img.attrs({
  src: ProblemSolvingIcon,
  alt: 'Problem resolvido',
})`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 500px;

  @media (max-width: 1060px) {
    width: 400px;
  }

  @media (max-width: 860px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SignUpLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
