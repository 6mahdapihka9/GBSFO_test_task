import React, { ChangeEvent, useState } from 'react';
import { PasswordType } from "../../types/types";
import { TextField } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from "@mui/icons-material/Delete";
import FitButton from "../design/FitButton";
import FixedBox from "../design/FixedBox";
import ScrollableBox from "../design/ScrollableBox";
import ModifiedLi from "../design/ModifiedLi";
import { useTypedDispatch } from "../../redux/hooks/useTypedDispatch";

type passwordProps = {
  password: PasswordType
}

const Password = ({ password }: passwordProps ) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isEditionInProgress, setIsEditionInProgress] = useState<boolean>(false);

  const [newName, setNewName] = useState<string>(password.name);
  const [newValue, setNewValue] = useState<string>(password.value);

  const { updatePassword, deletePassword } = useTypedDispatch();

  const handleToggleVisibility = () => {
    setVisible(prevState => !prevState);
  }
  const handleEdit = () => {
    if (newName === password.name && newValue === password.value) {
      return setIsEditionInProgress(false);
    }
    if (newName && newValue) {
      updatePassword(newName, newValue, password._id );
      setIsEditionInProgress(false);
    }
  }
  const handleDelete = (id: string) => {
    deletePassword(id);
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewName(e.target.value);
  }
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewValue(e.target.value);
  }

  return (
    <ModifiedLi>
      {
        isEditionInProgress
          ? (<>
            <TextField variant="outlined" value={newName} onChange={handleNameChange} required />
            <TextField variant="outlined" value={newValue} onChange={handleValueChange} required />
          </>)
          :(<>
            <FixedBox>{password.name}</FixedBox>
            <ScrollableBox>
              {
                visible
                  ? password.value
                  : '********'
              }
            </ScrollableBox>
          </>)
      }
      <FitButton onClick={handleToggleVisibility} disabled={isEditionInProgress}>
        {
          visible
            ? <VisibilityOffIcon />
            : <VisibilityIcon />
        }
      </FitButton>
      {
        isEditionInProgress &&
        <FitButton onClick={() => handleEdit()}>
          <CheckIcon/>
        </FitButton>
      }
      {
        !isEditionInProgress &&
        <FitButton onClick={() => setIsEditionInProgress(true)}>
          <EditIcon/>
        </FitButton>
      }
      <FitButton onClick={() => handleDelete(password._id)}>
        <DeleteIcon/>
      </FitButton>
    </ModifiedLi>
  );
};

export default Password;