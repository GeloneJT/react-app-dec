import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertivisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertivisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertivisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
