'use client';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  MenuItem,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [userInitial, setUserInitial] = useState('U');
  const [profilePic, setProfilePic] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const updateProfileData = () => {
      const firstName = localStorage.getItem('firstName') || 'U';
      const storedProfilePic = localStorage.getItem('profilePic');

      setUserInitial(firstName.charAt(0).toUpperCase());
      setProfilePic(storedProfilePic || null);
    };

    updateProfileData();

    // Listen for changes in profile picture
    window.addEventListener('storage', updateProfileData);

    return () => {
      window.removeEventListener('storage', updateProfileData);
    };
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = () => {
    handleClose();
    router.push('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('profilePic');
    setProfilePic(null); // Clear profile picture immediately
    setUserInitial('U'); // Reset initial
    handleClose();
    router.push('/login');
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'primary.main', width: '100%', zIndex: 1200 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: 25,
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
          onClick={() => router.push('/')}
        >
          Sketch ⇒ Image
        </Typography>
        <Button sx={{ color: '#1a237e' }} onClick={() => router.push('/')}>
          Home
        </Button>
        <Button
          sx={{ color: '#1a237e' }}
          onClick={() =>
            window.open('https://github.com/PrashantAcharya0', '_blank')
          }
        >
          Contact
        </Button>
        <IconButton onClick={handleProfileClick} sx={{ marginLeft: 2 }}>
          <Avatar src={profilePic || ''}>
            {!profilePic ? userInitial : ''}
          </Avatar>
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
