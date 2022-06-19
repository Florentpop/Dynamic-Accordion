// import * as React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';


 function ColdStoreNavbar() {
  return (
    <AppBar position="static">
     <Toolbar>
      <IconButton size="large" edge="start" color="info" aria-label="logo">
      <SetMealTwoToneIcon style={{color: "white", width: "30", height: "30"}}/>
      </IconButton>
      <Typography variant="h6" component="div"  color= "white" sx={{flexGrow: 1}}>
        Smart Tuna
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button color="inherit">Login</Button>
      </Stack>
     </Toolbar>
    </AppBar>
  
  )
}
export default ColdStoreNavbar;