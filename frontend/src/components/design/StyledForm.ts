import { styled } from "@mui/material";

const StyledForm = styled('form')`
  display: flex;
  width: 100%;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export default StyledForm;