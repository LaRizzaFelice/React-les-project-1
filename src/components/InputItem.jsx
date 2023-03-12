import { TextField } from "@mui/material";

export const InputItem = ({ setText, text }) => {
  const onChange = (event) => {
    setText(event.target.value);
  };

  return <TextField type="text" onChange={onChange} value={text} />;
};
