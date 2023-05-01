import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({theme}) => theme.space[2]}px;
 
  width: 65vw;
  height: 650px;
  background-color: #fffbe6;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${({theme}) => theme.space[4]}px;
  width: 100%;
  
  color: ${({theme}) => theme.colors.accent};
  background-color: rgba(185, 228, 201, 0.5);
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(5.5px);
  font-size: ${({theme}) => theme.fontSizes.m};
  text-align: center;
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;