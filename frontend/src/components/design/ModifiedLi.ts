import {styled} from "@mui/material";

const ModifiedLi = styled("li")`
  display: flex;
  align-items: center;
  & > * {
    @media screen and (min-width: 720px){
      padding: 16px!important;
    }
    @media screen and (max-width: 720px){
      padding: 8px!important;
    }
  }
  & > *:not(:nth-last-child(-n+3)) {
    flex: 1;
  }
`;

export default ModifiedLi;