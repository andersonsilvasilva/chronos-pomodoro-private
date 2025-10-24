import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import QlqCoisa from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QlqCoisa />
  </StrictMode>,
);
