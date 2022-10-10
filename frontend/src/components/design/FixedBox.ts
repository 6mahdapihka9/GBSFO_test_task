import {Box, styled} from "@mui/material";

const FixedBox = styled(Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default FixedBox;