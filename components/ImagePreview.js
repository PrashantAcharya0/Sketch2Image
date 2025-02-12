'use client';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const ImagePreview = ({ image, onRemove }) => {
  const router = useRouter();

  const handleGenerate = () => {
    router.push('/generate');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img src={image} alt="Converted" width="100%" style={{ maxHeight: '180px', objectFit: 'contain' }} />
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="outlined" color="error" onClick={onRemove}>
          Remove
        </Button>
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Convert
        </Button>
      </Box>
    </Box>
  );
};

export default ImagePreview;
