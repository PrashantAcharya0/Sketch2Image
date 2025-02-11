'use client';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const ImagePreview = ({ image }) => {
  const router = useRouter();

  if (!image) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="error" suppressHydrationWarning>
          No image available. Please upload one.
        </Typography>
      </Box>
    );
  }

  const handleGenerate = () => {
    router.push('/ProfilePage');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        mt: 4,
      }}
    >
      <img src={image} alt="Converted" width="300px" />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Generate
        </Button>
      </Box>
    </Box>
  );
};

export default ImagePreview;
