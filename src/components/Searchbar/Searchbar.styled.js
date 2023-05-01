import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  min-height: 64px;
  padding: ${({theme}) => theme.space[4]}px ${({theme}) => theme.space[3]}px;
  color: ${({theme}) => theme.colors.white};
  box-shadow: ${({theme}) => theme.shadows.normal};
  background-color: ${({theme}) => theme.colors.primaryBackground};
`;

export const Form = styled.form`
display: flex;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;
margin: 0 auto;
padding: ${({theme}) => theme.space[3]}px;
width: 100%;
max-width: 600px;
`;

export const SearchFormSubmitBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
max-width: 100%;
gap: ${({theme}) => theme.space[2]}px;
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
border-radius: ${({theme}) => theme.space[3]}px;
border: none;
box-shadow: ${({theme}) => theme.shadows.normal};
transition: all 0.25s ease-in-out;
background-color: ${({theme}) => theme.colors.backgroundColor};
color: ${({theme}) => theme.colors.text};
cursor: pointer;
:hover,
:focus {
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    color: ${({theme}) => theme.colors.white};
}
  
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: ${({theme}) => theme.fontSizes.l};
  border: none;
  outline: none;
  padding: ${({theme}) => theme.space[2]}px ${({theme}) => theme.space[4]}px;
  background-color: transparent;
  color: ${({theme}) => theme.colors.accent};
  
  ::placeholder {
    color: ${({theme}) => theme.colors.accent};
    font-size: 18px;
  }
  box-shadow: inset 1px 1px 3px #dad7d7, inset -1px -1px 5px #fff;
  border-radius: ${({theme}) => theme.space[3]}px;
  overflow: hidden;
`;