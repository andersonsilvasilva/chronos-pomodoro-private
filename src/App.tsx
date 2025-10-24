import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Timer, TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Povo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sunt,
        fugiat repudiandae dolore velit facilis iste quam deleniti pariatur
        minima ab voluptatum beatae nulla quaerat minus totam ut. Minus, culpa.
      </p>
    </>
  );
}
export default App;
