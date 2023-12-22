import Alert from './components/Alert';

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>Hello World</Alert>
      {/* <Alert>Hello <span>World</span></Alert>  FOR IF YOU WANTED TO PASS A MORE COMPLEX STRUCTURE */}
    </div>
  );
}

export default App;
