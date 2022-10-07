import { Box, styled } from '@mui/material';

const BoxForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  & > *:not(:last-child) {
    margin: 20px 0;
  }
`;

export default BoxForm;
