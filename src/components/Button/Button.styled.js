import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: ${({theme}) => theme.space[4]}px;
  padding: ${({theme}) => theme.space[4]}px ${({theme}) => theme.space[3]}px;
  border: none;
  border-radius: ${({theme}) => theme.space[3]}px;
  font-size: ${({theme}) => theme.fontSizes.m};
  color:  ${({theme}) => theme.colors.accent};
  background-color: ${({theme}) => theme.colors.backgroundColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;