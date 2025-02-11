'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const ReactQueryClientProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient()); // Ensure it doesn't reinitialize

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
