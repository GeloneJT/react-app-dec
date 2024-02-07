import { useState } from 'react';
import ListGroup from './components/ListGroup/ListGroup';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  return (
    <div>
      <ListGroup
        items={items}
        heading={'Cities'}
        onSelectItem={function (item: string): void {
          console.log(item);
        }}
      ></ListGroup>
    </div>
  );
}

export default App;
