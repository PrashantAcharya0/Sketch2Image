'use client';
import { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

const ProfileIcon = () => {
  const [firstName, setFirstName] = useState('U'); // Default initial value
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFirstName = window.localStorage.getItem('firstName');
      if (storedFirstName) {
        setFirstName(storedFirstName.charAt(0).toUpperCase());
      }
    }
  }, []);

  return (
    <IconButton onClick={() => router.push('/profile-details')}>
      <Avatar>{firstName}</Avatar>
    </IconButton>
  );
};

export default ProfileIcon;
