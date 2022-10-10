import { styled } from "@mui/material";

const CenteredDiv = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  min-width: 400px;
  padding: 20px;
  
  margin: 60px auto 0 auto;
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export default CenteredDiv;