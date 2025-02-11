'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImagePreview from './ImagePreview';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

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
          margin: 'auto',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#e0e0e0' },
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
        />
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
      </Paper>

      {image && <ImagePreview image={image} />}
    </Box>
  );
};

export default ImageUpload;
