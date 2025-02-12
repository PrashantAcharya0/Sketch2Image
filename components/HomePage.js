'use client';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import Header from './Header';

const Home = () => {
  const router = useRouter();
  const [userInitial, setUserInitial] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const firstName = localStorage.getItem('firstName');

    if (!token) {
      router.push('/login'); // Redirect to login if no token found
    } else {
      setIsAuthenticated(true);
      setUserInitial(firstName ? firstName.charAt(0).toUpperCase() : 'U');
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // Prevent flashing of home content before redirection
  }

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
      {/* Pass props to Header */}
      <Header
        handleProfileClick={handleProfileClick}
        userInitial={userInitial}
      />

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
