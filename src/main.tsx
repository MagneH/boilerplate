import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyle } from './components/GlobalStyle.ts';

import { App } from './App.tsx';
import { AuthProvider } from './components/Login/AuthProvider.tsx';

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>,
  );
}
