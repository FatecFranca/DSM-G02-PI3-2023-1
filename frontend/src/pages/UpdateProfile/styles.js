import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const UpdateProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const BackButton = styled(Link)`
  margin-top: 2em;
  text-decoration: none;
  color: #7C9885;
`;