import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainCard = styled.div`
  background-color: white;
  border-radius: 10px;
  color: #3bb;
  height: 65%;
  width: 40vw;
  margin: 0 auto;

  &:hover {
    box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardTop = styled.div`
  margin-left: 6%;
`;

const CardBottom = styled.div`
  margin-top: 5%;
  color: white;
`;

const GreenP = styled.p`
  color: #bfdf32;
`;

// .card-bottom{
//   margin-top: 5%;
// }

// .card-bottom h2{
//   color: white;
// }

// .lightseagreen{
//   color: #3bb;
// }

// .green {
//   color: #bfdf32;
// }

const LeftText = styled.div`
  text-align: left;
  margin-left: 6%;
  margin: 6px 0;
`;

export { Container, MainCard, CardTop, CardBottom, GreenP, LeftText };
