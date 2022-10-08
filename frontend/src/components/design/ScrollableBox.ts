import {Box, styled} from "@mui/material";

const ScrollableBox = styled(Box)`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
    border: 5px solid white;
  }
`;

export default ScrollableBox;