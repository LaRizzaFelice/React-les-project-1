import { useState } from "react";
import { Button } from "@mui/material";

export const MyButton = ({ label: inputLabel, heyLabel, setText }) => {
  const [label, setLabel] = useState(inputLabel);

  const hey = () => {
    setLabel(heyLabel);
    setText("");
  };

  console.log(label);

  return (
    <Button
      variant="contained"
      onClick={hey}
      style={{ color: "pink" }}
      sx={{ color: "yellow" }}
      color="secondary"
    >
      {label}
    </Button>
  );
};
