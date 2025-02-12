'use client';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import ImagePreview from './ImagePreview';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Reference to file input

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset input field
    }
  };

  return (
    <Box sx={{ textAlign: 'center', px: 2 }}>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Upload Your Sketch
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 2,
          border: '2px dashed #90caf9',
          maxWidth: '400px',
          minHeight: '250px',
          margin: 'auto',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          '&:hover': { backgroundColor: '#e0e0e0' },
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => !image && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef} // Reference to file input
          style={{ display: 'none' }}
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />

        {!image ? (
          <>
            <Typography variant="h6" mb={3}>
              Drag & Drop or
            </Typography>
            <Button
              color="primary"
              variant="contained"
              sx={{ mb: 2 }}
              startIcon={<CloudUploadIcon />}
            >
              Click to Upload
            </Button>
            <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
              Supported formats: JPG, PNG
            </Typography>
          </>
        ) : (
          <ImagePreview image={image} onRemove={handleRemoveImage} />
        )}
      </Paper>
    </Box>
  );
};

export default ImageUpload;
