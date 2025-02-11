'use client';
import { Box, Typography } from '@mui/material';

const ProfileDetail = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="subtitle1">Welcome to your profile page.</Typography>
    </Box>
  );
};

export default ProfileDetail;
