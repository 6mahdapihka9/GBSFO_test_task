import React, {useState} from 'react';
import {PasswordType} from "../../types/types";
import {Box, Button, styled} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FitBox from "../design/FitBox";
import FitButton from "../design/FitButton";
import FixedBox from "../design/FixedBox";
import ScrollableBox from "../design/ScrollableBox";
import ModifiedLi from "../design/ModifiedLi";

type passwordProps = {
  password: PasswordType
}

// todo handle all redux methods of password
const Password = ({ password }: passwordProps ) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleChange = () => {
    setVisible(prevState => !prevState);
  }
  return (
    <ModifiedLi>
      <FixedBox>{ password.name }</FixedBox>
      <ScrollableBox>
        {
          visible
            ? password.value
            : '********'
        }
      </ScrollableBox>
      {/*<FitBox>*/}
        <FitButton onClick={handleChange}>
          {
            visible
              ? <VisibilityOffIcon />
              : <VisibilityIcon />
          }
        </FitButton>
        <FitButton>
          <EditIcon/>
        </FitButton>
        <FitButton>
          <DeleteIcon/>
        </FitButton>
      {/*</FitBox>*/}
    </ModifiedLi>
  );
};

export default Password;