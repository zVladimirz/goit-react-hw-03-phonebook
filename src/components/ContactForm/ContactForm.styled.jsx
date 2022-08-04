import { Field, Form } from 'formik';

import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  16.65% {
      transform: skew(-12deg);
  }
  33.3% {
      transform: skew(10deg);
  }
  49.95% {
      transform: skew(-6deg);
  }
  66.6% {
      transform: skew(4deg);
  }
  83.25% {
      transform: skew(-2deg);
  }
  100% {
      transform: skew(0);
  }
`;

export const StyledButton = styled.button`
  min-width: 90px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #2f80ed;
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 12px 32px 12px 32px;
  cursor: pointer;

  &:hover {
    animation-name: ${wobble};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`;

export const Input = styled(Field)`
  color: #2a2a2a;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
`;
export const DivCenter = styled.div`
  text-align: center;
`;
export const FormBorder = styled(Form)`
  border: 1px solid black;
  padding: 10px;
`;
