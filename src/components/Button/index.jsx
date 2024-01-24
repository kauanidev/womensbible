/* eslint-disable react/prop-types */
import { Container } from "./styles";

export const Button = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
