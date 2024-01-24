import styled from "styled-components";

export const Container = styled.button`
  border: 3px solid ${({ theme }) => theme.primary};
  background: none;
  padding: 1rem;
  font-size: 30px;
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  width: 100px;
  height: 80px;
  cursor: pointer;
  transition: 0.4s;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }
`;
