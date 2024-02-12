import { useState } from 'react';
import Form from './components/Form';


function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
