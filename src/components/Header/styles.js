import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  gap: 7rem;
  background: ${({ theme }) => theme.pink200};

  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    > span {
      font-weight: 400;
      font-size: 16px;
    }
  }
`;
