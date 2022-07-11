import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  display: inline-block;
  padding-bottom: 6%;
  border-bottom-left-radius: 5px;
  background-color: #3bb;
`;

const LeftSpace = styled.div`
  text-align: left;
  margin-left: 12%;
`;

const LightSeanP = styled.p`
  color: #dff;
`;

// .lightseagreen__background {
//   background-color: #3bb;
// }

// .lightcyan {
//   color: #dff;
// }

const MediumturquoiseP = styled.p`
  font-size: 13px;
  color: #5cc;
  width: 50%;
  display: inline;
`;

const InlineH2 = styled.h2`
  width: 50%;
  display: inline;
`;

const AccessP = styled.p`
  margin-top: 2%;
  font-size: 13px;
  color: #dff;
`;

// .inline {
// width: 50%;
// display: inline;
// }

// .font-13 {
//   font-size: 13px;
// }

const MonthlyPrice = styled.div`
  vertical-align: middle;
  margin-right: 4%;
`;

// #access{
//   margin-top: 2%;
// }

export {
  Container,
  LeftSpace,
  LightSeanP,
  MonthlyPrice,
  InlineH2,
  MediumturquoiseP,
  AccessP,
};
