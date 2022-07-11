import styled from "styled-components";

const GreenButton = styled.button`
  background-color: #ce3;
  width: 84%;
  height: 40px;
  position: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  color: white;
  margin-top: 8%;

  &hover {
    cursor: pointer;
    background-color: rgb(211, 239, 89);
  }
`;

export { GreenButton };
