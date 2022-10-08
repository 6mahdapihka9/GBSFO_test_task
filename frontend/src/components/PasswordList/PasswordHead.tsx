import React from 'react';
import ModifiedLi from "../design/ModifiedLi";
import { Box, styled } from "@mui/material";

const BoldText = styled(Box)`
  font-weight: bold;
`;

const FixedSizeBox = styled(Box)`
  width: 24px;
`;

const PasswordHead = () => {
  return (
    <ModifiedLi>
      <BoldText>Name</BoldText>
      <BoldText>Value</BoldText>
      <FixedSizeBox />
      <FixedSizeBox />
      <FixedSizeBox />
    </ModifiedLi>
  );
};

export default PasswordHead;