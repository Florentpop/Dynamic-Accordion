// import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import SetMealTwoToneIcon from "@mui/icons-material/SetMealTwoTone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ColdStoreNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="info" aria-label="logo">
          <SetMealTwoToneIcon
            style={{ color: "white", width: "30", height: "30" }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          color="white"
          textAlign="center"
          sx={{ flexGrow: 1 }}
        >
          Smart Tuna
        </Typography>
        <IconButton size="large" edge="start" color="info" aria-label="logo">
          <AccountCircleIcon
            style={{ color: "white", width: "30", height: "30" }}
          />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Kofi</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default ColdStoreNavbar;
