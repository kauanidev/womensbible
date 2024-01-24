import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => rgba(theme.violet, 0.5)};
  padding-left: 0;
  padding-right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 5rem;

  > p {
    font-weight: 500;
    font-size: 22px;
    margin-top: 3rem;
    background: ${({ theme }) => theme.violet};
    width: max-content;
    padding: 0.5rem 1.5rem;
    padding-right: 2.5rem;
    border-radius: 5px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      font-size: 20px;
      display: flex;
      align-items: center;
      margin-right: 1rem;
      color: ${({ theme }) => theme.pink200};
      cursor: pointer;
    }
  }

  > section {
    text-align: justify;
    font-size: 18px;
    line-height: 32px;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.pink100};
    }

    span[data-number] {
      margin-right: 1rem;
      background: ${({ theme }) => theme.violet};
      border-radius: 5px;
      width: 3rem;
      height: 2.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
`;
