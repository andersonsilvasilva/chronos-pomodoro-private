import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h1>Olá Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sunt,
        fugiat repudiandae dolore velit facilis iste quam deleniti pariatur
        minima ab voluptatum beatae nulla quaerat minus totam ut. Minus, culpa.
      </p>
    </div>
  </StrictMode>,
);
