import { Box, Card, Grid, Typography } from "@mui/material";

export const MovieItem = ({ title, poster, year }) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 250, borderRadius: 3 }}>
        <img
          alt="posterImage"
          src={poster}
          style={{ Width: 250, height: 360 }}
        />
        <Box padding={1}>
          <Typography variant="h2" fontSize={25}>
            {title}
          </Typography>
          <Typography variant="p">{year}</Typography>
        </Box>
      </Card>
    </Grid>
  );
};
