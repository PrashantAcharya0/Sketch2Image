'use client';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const ProfileDetail = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    role: '',
    profilePic: '',
  });

  const [editingField, setEditingField] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    const firstName = localStorage.getItem('firstName') || 'Not Set';
    const lastName = localStorage.getItem('lastName') || 'Not Set';
    const email = localStorage.getItem('email') || 'Not Set';
    const gender = localStorage.getItem('gender') || 'Not Set';
    const role = localStorage.getItem('userRole') || 'Not Set';
    const profilePic = localStorage.getItem('profilePic') || '';

    setUser({ firstName, lastName, email, gender, role, profilePic });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem(editingField, user[editingField]);
    setEditingField(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setShowSaveButton(true); // Show save button after selecting an image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfilePic = () => {
    if (selectedImage) {
      localStorage.setItem('profilePic', selectedImage);
      setUser((prevUser) => ({ ...prevUser, profilePic: selectedImage }));
      setSelectedImage(null);
      setShowSaveButton(false);

      // Notify Header component
      window.dispatchEvent(new Event('storage'));
    }
  };

  const handleRemoveProfilePic = () => {
    localStorage.removeItem('profilePic');
    setUser((prevUser) => ({ ...prevUser, profilePic: '' }));
    setShowSaveButton(false);

    // Notify Header component
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 1100, top: 0 }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', flex: 1, marginTop: '64px' }}>
        <Box
          sx={{
            width: '250px',
            flexShrink: 0,
            position: 'fixed',
            height: '100vh',
            zIndex: 1000,
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            marginLeft: '250px',
            flexGrow: 1,
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card sx={{ maxWidth: 600, width: '100%', p: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ textAlign: 'center', mb: 3 }}>
                User Profile
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Avatar
                  src={selectedImage || user.profilePic}
                  sx={{ width: 100, height: 100, mb: 1 }}
                >
                  {!selectedImage && !user.profilePic
                    ? user.firstName.charAt(0).toUpperCase()
                    : ''}
                </Avatar>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Picture
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Button>
                {showSaveButton && (
                  <Button
                    variant="outlined"
                    sx={{ mt: 1 }}
                    onClick={handleSaveProfilePic}
                  >
                    Save Picture
                  </Button>
                )}
                {user.profilePic && (
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    sx={{ mt: 1 }}
                    onClick={handleRemoveProfilePic}
                  >
                    Remove Picture
                  </Button>
                )}
              </Box>
              {Object.keys(user).map((key) =>
                key !== 'profilePic' ? (
                  <Box
                    key={key}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 2,
                      gap: 2,
                    }}
                  >
                    <Typography sx={{ width: '30%', fontWeight: 'bold' }}>
                      {key.toUpperCase()}
                    </Typography>
                    {editingField === key ? (
                      <TextField
                        name={key}
                        value={user[key]}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                      />
                    ) : (
                      <Typography
                        sx={{
                          width: '50%',
                          padding: '8px',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '5px',
                        }}
                      >
                        {user[key] || 'Not Set'}
                      </Typography>
                    )}
                    {editingField === key ? (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    ) : (
                      <IconButton
                        size="small"
                        onClick={() => setEditingField(key)}
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                  </Box>
                ) : null
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDetail;
