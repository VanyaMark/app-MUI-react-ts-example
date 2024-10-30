import * as React from 'react';
import {useState} from "react";
import { Box, Button, Container, Paper, Snackbar, Typography } from "@mui/material";
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';


export default function App() {
  const movies = ["Movie01", "Movie02", "movie03", "Movie04", "Movie05"];
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Successfully Imported
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/* Assuming CloseIcon is imported */}
        {/* <CloseIcon fontSize="small" /> */}
      </IconButton>
    </React.Fragment>
  );

  return (
    <Container>
      <Typography variant="h1">Movies</Typography>
      <Typography variant="h2">Trending Movies</Typography>
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "flex-start",
        }}
      >
        {movies.map((movie) => (
          <Paper key={movie} elevation={3} sx={{ width: { xs: 1, md: 0.3 } }}>
            <Typography variant="h4" sx={{ p: 2 }}>
              {movie}
            </Typography>
            <Typography sx={{ mt: 2, p: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button variant="contained" sx={{ m: 1 }} onClick={handleClick}>
              Read more...
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={1500}
              onClose={handleClose}
              message="Movie"
              action={action}
            />
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
