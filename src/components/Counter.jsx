import { Box, Button } from "@mui/material";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const onDown = () => {
        setCount((prev)=> prev -1);
    };

    const onUp = () => {
        setCount((prev)=> {
            return prev + 1;
        });

    }
        const reset = () => {
        setCount(0) ;
    };


    return (
    <Box display= "flex" flexDirection = "column" alignItems= "center">
        <h1>{count}</h1>
        <Box display="flex" gap={10}>
        <Button variant="contained" onClick={onDown}>Down</Button>
        <Button variant="contained" onClick={onUp}>Up</Button>
        <Button variant="contained" onClick={reset}>Reset</Button>
        </Box>
    </Box>
    );

}