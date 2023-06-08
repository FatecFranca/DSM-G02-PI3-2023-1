import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: #333;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 4rem 10rem;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// export const Input = styled.input` // Está sendo utilizado no component
//   width: 100%;
//   padding: 0.8rem;
//   border: 1px solid #000;
//   border-radius: 14px;
//   color: #000;
//   text-align: center;
// `;

export const ErrorLabel = styled.span`
  margin-bottom: 1.5rem;
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 140px;
  padding: 0.75rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0a53b2;
  }
`;

export const RegisterSpan = styled.span`
  font-size: 14px;
  color: #000;

  & a {
    color: #0a53b2;
    text-decoration: none;

    &:hover {
      color: #0e7511;
    }
  }
`;
