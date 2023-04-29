import styled from "styled-components";

/* CSS */
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  padding: 3em;
`;

export const Title = styled.h2`
  margin-top: 2vh;
  margin-bottom: 6vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
`;

export const ErrorLabel = styled.span`
  margin: 8px;

  color: red;

  font-size: large;
  font-weight: 500;
  font-style: italic;
`;

export const RegisterSpan = styled.span`
  font-size: medium;

  & a {
    &:link, &:visited {
      color: #0a53b2;
    }

    &:hover {
      color: #0e7511;
    }

    &:active {
      color: #0a53b2;
    }
  }
`;

