import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
`;

export const Title = styled.h2`
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  color: #333;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 60vw;
  padding: 3rem 5rem;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputBox = styled.div`
  width: 100%;
  /* margin-bottom: 1.5rem; */
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000;
  border-radius: 14px;
  color: #000;
`;

export const ErrorLabel = styled.span`
  margin-bottom: 1.5rem;
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 75%;
  max-width: 360px;

  background-color: #0e7511;
  color: #fff;

  font-weight: 600;
  font-size: larger;

  cursor: pointer;

  border: none;
  border-radius: 6px;
  margin: 2rem;
  padding: 16px 18px;

  &:hover {
    background-color: ${ props => props.fColor };
    color: ${ props => props.bgColor };
}
`;

export const LoginSpan = styled.span`
  font-size: 14px;

  & a {
    color: #0a53b2;
    text-decoration: none;

    &:hover {
      color: #0e7511;
    }
  }
`;

export const Label = styled.label`
  color: #000;
  margin-bottom: 0.5rem;
`;

export const BackButton = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-top: 2rem;

  &:hover {
    color: #0a53b2;
  }
`;
