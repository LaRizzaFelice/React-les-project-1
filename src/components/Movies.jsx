import { Box, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { MovieItem } from "./MovieItem";

export const Movies = () => {
  const [data, setData] = useState();

  if (!data) {
    fetch(
      "https://europe-west1-javascript-lessons-tijl.cloudfunctions.net/movies"
    )
      .then((res) => res.json())
      .then((res) => setData(res));

    console.log(data);

    if (!data) {
      return (
        <Box display="flex" flexDirection="column" alignItems={"center"}>
          <CircularProgress />
        </Box>
      );
    }
  }
  return (
    <Grid container spacing={2}>
      {data.map((movie) => (
        <MovieItem
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        />
      ))}
    </Grid>
  );
};
