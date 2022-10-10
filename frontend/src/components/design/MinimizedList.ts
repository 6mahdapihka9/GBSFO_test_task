import {styled} from "@mui/material";

const MinimizedList = styled("ul")`
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  & > *:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

export default MinimizedList;