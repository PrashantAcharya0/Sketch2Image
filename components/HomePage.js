'use client';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';

const Home = () => {
  const router = useRouter();
  const [userInitial, setUserInitial] = useState('U'); // Default value to avoid mismatch

  useEffect(() => {
    setUserInitial(''); // Runs only on the client to prevent SSR issues
  }, []);

  const handleProfileClick = () => {
    router.push('/profile');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      {/* Page Header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: 'primary.main', width: '100%' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 25 }}>
            Sketch ⇒ Image
          </Typography>
          <Button sx={{ color: '#1a237e' }}>Home</Button>
          <Button sx={{ color: '#1a237e' }}>Contact</Button>

          {/* Profile Icon */}
          <IconButton onClick={handleProfileClick} sx={{ marginLeft: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {userInitial || 'U'}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Page Main Content */}
      <Box sx={{ flex: 1, textAlign: 'center', px: 2, width: '100%' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#1a237e', mt: 10, mb: 4 }}
        >
          Turn Your Sketches Into Stunning Images
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ mb: 3, fontSize: 20 }}
        >
          Use our tool to transform hand-drawn sketches into beautiful images.
        </Typography>

        {/* Image Upload Section */}
        <ImageUpload />
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 2,
          backgroundColor: '#e3f2fd',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Box>
          <Button color="info" size="small">
            Home
          </Button>
          <Button color="info" size="small">
            Contact
          </Button>
        </Box>
        <Typography variant="body2">
          © 2025 Sketch ⇒ Image. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
