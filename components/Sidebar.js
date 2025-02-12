'use client';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { text: 'Profile', path: '/profile' },
    { text: 'Settings', path: '/settings' },
  ];

  return (
    <Box
      sx={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#f4f4f4',
        paddingTop: '80px', // Push below Header
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          paddingBottom: '10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        Dashboard
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItem
            component="div"
            key={item.text}
            onClick={() => router.push(item.path)}
            sx={{
              padding: '12px 20px',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#ddd' },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
